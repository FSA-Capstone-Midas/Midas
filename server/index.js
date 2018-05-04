const path = require("path");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const compression = require("compression");
const session = require("express-session");
const passport = require("passport");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require("./db");
const sessionStore = new SequelizeStore({ db });
const PORT = process.env.PORT || 8080;
const app = express();
const plaid = require("plaid");
module.exports = app;

/**
 * In your development environment, you can keep all of your
 * app's secret API keys in a file called `secrets.js`, in your project
 * root. This file is included in the .gitignore - it will NOT be tracked
 * or show up on Github. On your production server, you can add these
 * keys as environment variables, so that they can still be read by the
 * Node process on process.env
 */
if (process.env.NODE_ENV !== "production") require("../secrets");

// passport registration
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) =>
  db.models.user
    .findById(id)
    .then(user => done(null, user))
    .catch(done)
);

const createApp = () => {
  // logging middleware
  app.use(morgan("dev"));

  // body parsing middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // compression middleware
  app.use(compression());

  // session middleware with passport
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "my best friend is Cody",
      store: sessionStore,
      resave: false,
      saveUninitialized: false
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  // auth and api routes
  app.use("/auth", require("./auth"));
  app.use("/api", require("./api"));

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, "..", "public")));

  let ACCESS_TOKEN = null;
  let PUBLIC_TOKEN = null;
  var ITEM_ID = null;

  let client = new plaid.Client(
    "5ae8f515900e950013499acf",
    "f274c354ebdaf254570702d564cd40",
    "f274c354ebdaf254570702d564cd40",
    plaid.environments.development
  );

  app.post("/get_access_token", (req, res, next) => {
    // console.log(
    //   "?????????????????????????????????????",
    //   req.body,
    //   "what do i have here"
    // );
    console.log("???????????????????????", req.body.publicToken);
    PUBLIC_TOKEN = req.body.publicToken;
    client.exchangePublicToken(PUBLIC_TOKEN, function(err, tokenResponse) {
      if (err != null) {
        console.log("could not exchange public_token", err);
        return res.json({ err: err });
      }
      ACCESS_TOKEN = tokenResponse.access_token;
      console.log("Access Token: " + ACCESS_TOKEN);
      ITEM_ID = tokenResponse.item_id;
      console.log("Item ID: " + ITEM_ID);
    });
  });

  app.get("/auth", function(request, response, next) {
    console.log("come on boys: ", "access-development-" + ACCESS_TOKEN);
    // Pull the Item - this includes information about available products,
    // billed products, webhook information, and more.
    client.getAuth(ACCESS_TOKEN, function(error, data) {
      if (error != null) {
        console.log(JSON.stringify(error));
        return response.json({
          error: error
        });
      }
      response.json({
        error: false,
        accounts: data.accounts,
        numbers: data.numbers
      });
    });
  });

  // any remaining requests with an extension (.js, .css, etc.) send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error("Not found");
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });

  // sends index.html
  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public/index.html"));
  });

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error.");
  });
};

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
  );
};

const syncDb = () => db.sync();

// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
  sessionStore
    .sync()
    .then(syncDb)
    .then(createApp)
    .then(startListening);
} else {
  createApp();
}

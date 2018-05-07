const router = require("express").Router();
module.exports = router;
const plaid = require("plaid");

let ACCESS_TOKEN = null;
let PUBLIC_TOKEN = null;
var ITEM_ID = null;

let client = new plaid.Client(
  "5ae8f515900e950013499acf",
  "f274c354ebdaf254570702d564cd40",
  "f274c354ebdaf254570702d564cd40",
  plaid.environments.development
);

router.post("/get_access_token", (req, res, next) => {
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

router.get("/auth", function(request, response, next) {
  console.log("access-development-" + ACCESS_TOKEN);
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

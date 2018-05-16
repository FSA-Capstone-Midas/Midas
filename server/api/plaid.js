const plaid = require("plaid");
const router = require("express").Router();
// const { ACCESS_TOKEN, ITEM_ID } = require("../../secrets.js");
const { User } = require("../db/models");

module.exports = router;

//convert today's for plaid api version
Date.prototype.yyyymmdd = function(past) {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();
  return [
    this.getFullYear() - past,
    (mm > 9 ? "" : "0") + mm,
    (dd > 9 ? "" : "0") + dd
  ].join("-");
};

//our server key
let client = new plaid.Client(
  "5af4b49ee1c4cb0012b62b85",
  "75968c85b9fcf14bb18a8e198161ad",
  "75968c85b9fcf14bb18a8e198161ad",
  plaid.environments.development
);

router.post("/get_access_token", (req, res, next) => {
  let successTokenFromPlaid = req.body.successToken;
  client.exchangePublicToken(successTokenFromPlaid, function(
    err,
    tokenResponse
  ) {
    if (err) {
      return res.json({ err });
    } else {
      let plaidTokenId = tokenResponse.access_token;
      let plaidItemId = tokenResponse.item_id;

      return User.findById(req.user.id)
        .then(user => user.update({ plaidTokenId, plaidItemId }))
        .then(result => res.status(200).json({ success: "success" }))
        .catch(next);
    }
  });
});

// Account balance from Plaid API
router.get("/auth", function(req, res, next) {
  //grab from databese

  User.findById(req.user.id)
    .then(user => {
      let accessToken = user.plaidTokenId;
      client.getAuth(accessToken, function(error, data) {
        if (error) {
          return res.json({ error });
        } else {
          console.log("HERER", req.user);
          return res.status(200).json({
            error: false,
            accountInfo: data.accounts //account balances
          });
        }
      });
    })
    .catch(next);
});

router.get("/transactions", (req, res, next) => {
  let date = new Date();
  let todatsDate = date.yyyymmdd(0);
  let lastYear = date.yyyymmdd(1);

  User.findById(req.user.id)
    .then(user => {
      let accessToken = user.plaidTokenId;
      client.getTransactions(
        accessToken,
        lastYear,
        todatsDate,
        {
          count: 500,
          offset: 0
        },
        function(error, data) {
          if (error) {
            return res.json({
              error: error
            });
          } else {
            console.log("HERER", req.user.id);
            return res.status(200).json({
              error: false,
              transaction: data.transactions
            });
          }
        }
      );
    })
    .catch(next);
});

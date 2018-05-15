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

// let ACCESS_TOKEN = null;
// let ASSET_REPORT_TOKEN = null;
// let ASSET_REPORT_ID = null;

//our server key
let client = new plaid.Client(
  "5af4b49ee1c4cb0012b62b85",
  "75968c85b9fcf14bb18a8e198161ad",
  "75968c85b9fcf14bb18a8e198161ad",
  plaid.environments.development
);

router.post("/get_access_token", (req, res, next) => {
  console.log("HEREE", req.body.successToken);
  let successTokenFromPlaid = req.body.successToken;
  console.log(successTokenFromPlaid);
  client.exchangePublicToken(successTokenFromPlaid, function(
    err,
    tokenResponse
  ) {
    if (err) {
      return res.json({ err });
    }
    console.log(tokenResponse);
    // ACCESS_TOKEN = tokenResponse.access_token; //token from api
    //ITEM_ID = tokenResponse.item_id; //item id from api
    let plaidTokenId = tokenResponse.access_token;
    let plaidItemId = tokenResponse.item_id;
    console.log("47", plaidTokenId);
    console.log("48", plaidItemId);

    User.findById(req.user.id)
      .then(user => user.update({ plaidTokenId, plaidItemId }))
      .catch(next);

    // console.log("Access Token: " + ACCESS_TOKEN);
    // console.log("Item ID: " + ITEM_ID);

    res.status(200).json({ success: "success" });
  });
});

// router.get("/auth", function(request, response, next) {
//   // Pull the Item - this includes information about available products,
//   // billed products, webhook information, and more.
//   client.getAuth(ACCESS_TOKEN, function(error, data) {
//     if (error) {
//       return response.json({ error });
//     }
//     //Plaid success response
//     response.status(200).json({
//       error: false,
//       accountInfo: data.accounts //account balances
//     });
//   });
// });

// router.get("/transactions", (req, res, next) => {
//   let date = new Date();
//   let todatsDate = date.yyyymmdd(0);
//   let lastYear = date.yyyymmdd(1);
//   client.getTransactions(
//     ACCESS_TOKEN, //hard code, need to change
//     lastYear,
//     todatsDate,
//     {
//       count: 500,
//       offset: 0
//     },
//     function(error, data) {
//       if (error) {
//         console.log(JSON.stringify(error));
//         return res.json({
//           error: error
//         });
//       }
//       res.status(200).json({
//         error: false,
//         transaction: data.transactions
//       });
//     }
//   );
// });

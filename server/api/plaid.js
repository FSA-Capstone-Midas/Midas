const plaid = require("plaid");
const router = require("express").Router();
const { ACCESS_TOKEN, ITEM_ID } = require("../../secrets.js");
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
  "5ae8f515900e950013499acf",
  "f274c354ebdaf254570702d564cd40",
  "f274c354ebdaf254570702d564cd40",
  plaid.environments.development
);

router.post("/get_access_token", (req, res, next) => {
  //store in db once we get the token back from plaid
  let PUBLIC_TOKEN = req.body.publicToken;
  client.exchangePublicToken(PUBLIC_TOKEN, function(err, tokenResponse) {
    if (err) {
      return res.json({ err });
    }
    // ACCESS_TOKEN = tokenResponse.access_token; //token from api
    console.log("Access Token: " + ACCESS_TOKEN);
    //ITEM_ID = tokenResponse.item_id; //item id from api
    console.log("Item ID: " + ITEM_ID);
  });
});

router.get("/auth", function(request, response, next) {
  // Pull the Item - this includes information about available products,
  // billed products, webhook information, and more.
  client.getAuth(ACCESS_TOKEN, function(error, data) {
    if (error) {
      return response.json({ error });
    }
    //Plaid success response
    response.status(200).json({
      error: false,
      accountInfo: data.accounts //account balances
    });
  });
});

router.get("/transactions", (req, res, next) => {
  let date = new Date();
  let todatsDate = date.yyyymmdd(0);
  let lastYear = date.yyyymmdd(1);
  client.getTransactions(
    ACCESS_TOKEN, //hard code, need to change
    lastYear,
    todatsDate,
    {
      count: 500,
      offset: 0
    },
    function(error, data) {
      if (error) {
        console.log(JSON.stringify(error));
        return res.json({
          error: error
        });
      }
      res.status(200).json({
        error: false,
        transaction: data.transactions
      });
    }
  );
});

const daysRequested = 60;
const options = {
  client_report_id: "123",
  webhook: "https://www.example.com",
  user: {
    client_user_id: "eY6D9AdYzgikPnRwzABeU7MpyorD9dSdq51n8",
    first_name: "Joshua",
    middle_name: "Leah",
    last_name: "Park",
    ssn: "537-65-3865",
    phone_number: "(555) 123-4567",
    email: "jane.doe@example.com"
  }
};

// ---Waiting for Plaid Response for authorization---
// router.get("/income", (req, res, next) => {
//   client.getIncome(ACCESS_TOKEN, function(error, data) {
//     if (error != null) {
//       console.log(JSON.stringify(error));
//       return res.json({
//         error: error
//       });
//     }
//     res.json({
//       error: false,
//       income: data.income
//     });
//   });
// });

// router.get("/identity", (req, res, next) => {
//   client.getIdentity(ACCESS_TOKEN, function(error, data) {
//     if (error != null) {
//       console.log(JSON.stringify(error));
//       return res.json({
//         error: error
//       });
//     }
//     res.json({
//       error: false,
//       info: data.info
//     });
//   });
// });

// router.get("/asset_report", (req, res, next) => {
//   client.getAssetReport(ASSET_REPORT_TOKEN, function(error, data) {
//     if (error != null) {
//       console.log(JSON.stringify(error));
//       return res.json({
//         error: error
//       });
//     }
//     res.json({
//       error: false,
//       report: data.assetReportId
//     });
//   });
// });

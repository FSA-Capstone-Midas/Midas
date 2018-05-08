const plaid = require("plaid");
const router = require("express").Router();
module.exports = router;

let ACCESS_TOKEN = null;
let PUBLIC_TOKEN = null;
var ITEM_ID = null;
let ASSET_REPORT_TOKEN = null;
let ASSET_REPORT_ID = null;
let client = new plaid.Client(
  "5ae8f515900e950013499acf",
  "f274c354ebdaf254570702d564cd40",
  "f274c354ebdaf254570702d564cd40",
  plaid.environments.development
);

router.post("/get_access_token", (req, res, next) => {
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

router.get("/auth", function(request, response, next) {
  console.log("come on boys: ", "access-development-" + ACCESS_TOKEN);
  // Pull the Item - this includes information about available products,
  // billed products, webhook information, and more.
  client.getAuth(
    "access-development-a18d6010-d862-4906-b6a6-f3e22d15180e",
    function(error, data) {
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
    }
  );
});

router.get("/transactions", (req, res, next) => {
  client.getTransactions(
    "access-development-a18d6010-d862-4906-b6a6-f3e22d15180e",
    "2017-01-01",
    "2017-02-15",
    {
      count: 250,
      offset: 0
    },
    function(error, data) {
      if (error != null) {
        console.log(JSON.stringify(error));
        return res.json({
          error: error
        });
      }
      res.json({
        error: false,
        transaction: data.transactions
      });
    }
  );
});

router.get("/income", (req, res, next) => {
  client.getIncome(
    "access-development-a18d6010-d862-4906-b6a6-f3e22d15180e",
    function(error, data) {
      if (error != null) {
        console.log(JSON.stringify(error));
        return res.json({
          error: error
        });
      }
      res.json({
        error: false,
        income: data.income
      });
    }
  );
});

router.get("/identity", (req, res, next) => {
  client.getIdentity(
    "access-development-a18d6010-d862-4906-b6a6-f3e22d15180e",
    function(error, data) {
      if (error != null) {
        console.log(JSON.stringify(error));
        return res.json({
          error: error
        });
      }
      res.json({
        error: false,
        info: data.info
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

router.post("/asset_report/create", (req, res, next) => {
  client.createAssetReport(
    ["access-development-a18d6010-d862-4906-b6a6-f3e22d15180e"],
    daysRequested,

    function(error, data) {
      if (error != null) {
        console.log(JSON.stringify(error));
        return res.json({
          error: error
        });
      }
      ASSET_REPORT_ID = data.asset_report_id;
      ASSET_REPORT_TOKEN = data.asset_report_token;
    }
  );
});

router.get("/asset_report", (req, res, next) => {
  client.getAssetReport(ASSET_REPORT_TOKEN, function(error, data) {
    if (error != null) {
      console.log(JSON.stringify(error));
      return res.json({
        error: error
      });
    }
    res.json({
      error: false,
      report: data.assetReportId
    });
  });
});
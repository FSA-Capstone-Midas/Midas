const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/plaid", require("./plaid"));
router.use("/state", require("./state"));
router.use("/retirement", require("./retirement"));
router.use("/house", require("./house"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

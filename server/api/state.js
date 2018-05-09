const router = require("express").Router();
const { State } = require("../db/models");
module.exports = router;

router.get("/apartment", (req, res, next) => {
  State.findAll({})
    .then(data => res.json(data))
    .catch(next);
});

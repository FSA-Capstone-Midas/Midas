const router = require("express").Router();
const { Phone } = require("../db/models");
module.exports = router;

router.post("/", (req, res, next) => {
  Phone.create(req.body)
    .then(rent => res.json(rent))
    .catch(next);
});

router.get("/user/:id", (req, res, next) => {
  Phone.findOne({
    where: {
      userId: req.params.id
    }
  })
    .then(phones => {
      res.json(phones);
    })
    .catch(next);
});

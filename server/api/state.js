const router = require("express").Router();
const { State, House, Apartment } = require("../db/models");
module.exports = router;

router.get("/apartment", (req, res, next) => {
  State.findAll({ include: [{ model: Apartment }] })
    .then(data => res.json(data))
    .catch(next);
});

router.get("/house", (req, res, next) => {
  State.findAll({ include: [{ model: House }] })
    .then(data => res.json(data))
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  State.findAll({
    where: {
      id: req.params.id
    },
    include: [{ all: true }]
  })
    .then(data => res.json(data))
    .catch(next);
});

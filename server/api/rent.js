const router = require("express").Router();
const { Rent } = require("../db/models");
module.exports = router;

router.post("/", (req, res, next) => {
  Rent.create(req.body)
    .then(rent => res.json(rent))
    .catch(next);
});

router.get("/user/:id", (req, res, next) => {
  //   console.log(req.params.id, "REQSSSSS");
  Rent.findOne({
    where: {
      userId: req.params.id
    }
  })
    .then(rents => {
      res.json(rents);
    })
    .catch(next);
});

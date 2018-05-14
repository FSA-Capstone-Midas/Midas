const router = require("express").Router();
const { Phone } = require("../db/models");
module.exports = router;

router.post("/", (req, res, next) => {
  Phone.create(req.body)
    .then(rent => res.json(rent))
    .catch(next);
});

router.get("/user/:id", (req, res, next) => {
  //   console.log(req.params.id, "REQSSSSS");
  Phone.findOne({
    where: {
      userId: req.params.id
    }
  })
    .then(rents => {
      res.json(rents);
    })
    .catch(next);
});

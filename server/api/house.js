const router = require("express").Router();
const { House } = require("../db/models");
module.exports = router;

router.get("/", (req, res, next) => {
  House.findAll()
    .then(housePlanData => res.json(housePlanData))
    .catch(next);
});

router.post("/user/:userId", (req, res, next) => {
  House.findOne({
    where: {
      userId: req.params.userId,
    },
  }).then(foundUser => {
    if (!foundUser) {
      House.create(req.body)
        .then(newHousePlan => {
          console.log("xxxxxx", newHousePlan);
          res.status(201).json(newHousePlan);
        })
        .catch(next);
    } else {
      foundUser
        .update(req.body)
        .then(newHousePlan => {
          console.log("xxxxxx", newHousePlan);
          res.status(201).json(newHousePlan);
        })
        .catch(next);
    }
  });
});

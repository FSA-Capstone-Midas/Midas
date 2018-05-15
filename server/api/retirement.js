const router = require("express").Router();
const { Retirement } = require("../db/models");
module.exports = router;

router.get("/user/:userId", (req, res, next) => {
  Retirement.findOne({
    where: {
      userId: req.params.userId,
    },
  })
    .then(retirementPlan => {
      res.json(retirementPlan);
    })
    .catch(next);
});

router.post("/user/:userId", (req, res, next) => {
  return Retirement.findOne({
    where: {
      userId: req.params.userId,
    },
  }).then(foundUser => {
    if (!foundUser) {
      return Retirement.create({
        userId: req.params.userId,
        birthyear: req.body.birthyear,
        earnEachYear: req.body.earnEachYear,
        martialStatus: req.body.martialStatus,
        monthlyRetirementSpending: req.body.monthlyRetirementSpending,
        retirementage: req.body.retirementage,
        saveEachYear: req.body.saveEachYear,
        savedSoFar: req.body.savedSoFar,
      })
        .then(newRetirementPlan => {
          res.status(201).json(newRetirementPlan);
        })
        .catch(next);
    } else {
      return Retirement.update(
        {
          birthyear: req.body.birthyear,
          earnEachYear: req.body.earnEachYear,
          martialStatus: req.body.martialStatus,
          monthlyRetirementSpending: req.body.monthlyRetirementSpending,
          retirementage: req.body.retirementage,
          saveEachYear: req.body.saveEachYear,
          savedSoFar: req.body.savedSoFar,
        },
        {
          where: {
            userId: req.params.userId,
          },
        }
      )
        .then(newRetirementPlan => {
          res.status(201).json(newRetirementPlan);
        })
        .catch(next);
    }
  });
});

router.delete("/user/:userId", (req, res, next) => {
  Retirement.findOne({
    where: {
      userId: req.params.userId,
    },
  })
    .then(retirementPlan => retirementPlan.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
});

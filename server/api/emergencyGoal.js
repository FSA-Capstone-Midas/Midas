const router = require("express").Router();
const { EmergencyGoal } = require("../db/models");

router.get("/user/:userId", (req, res, next) => {
  const userId = req.params.userId;
  EmergencyGoal.findOne({ where: { userId } })
    .then(result => {
      res.status(201).json(result);
    })
    .catch(next);
});

router.post("/user/:userId", (req, res, next) => {
  const { duration, expense, isEnter } = req.body;
  const userId = req.params.userId;
  EmergencyGoal.create({ duration, expense, userId, isEnter })
    .then(result => {
      res.status(201).json(result);
    })
    .catch(next);
});

router.delete("/user/:userId", (req, res, next) => {
  EmergencyGoal.findOne({
    where: {
      userId: req.params.userId,
    },
  })
    .then(emergencyPlan => emergencyPlan.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;

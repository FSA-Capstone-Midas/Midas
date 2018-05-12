const router = require("express").Router();
const { EmergencyGoal } = require("../db/models");

router.get("/user/:userId", (req, res, next) => {
  const userId = req.params.userId;
  EmergencyGoal.findAll({ where: { userId } })
    .then(result => {
      res.status(201).json(result);
    })
    .catch(next);
});

router.post("/user/:userId", (req, res, next) => {
  const { duration, expense } = req.body;
  const userId = req.params.userId;
  EmergencyGoal.create({ duration, expense, userId })
    .then(result => {
      res.status(201).json(result);
    })
    .catch(next);
});

module.exports = router;

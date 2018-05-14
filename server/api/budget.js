const router = require("express").Router();
const { Budget } = require("../db/models");
module.exports = router;

router.get("/user/:userId", (req, res, next) => {
  Budget.findOne({
    where: {
      userId: req.params.userId
    }
  })
    .then(budget => res.json(budget))
    .catch(next);
});

router.post("/user/:userId", (req, res, next) => {
  Budget.findOne({
    where: {
      userId: req.params.userId
    }
  })
    .then(foundBudget => {
      if (!foundBudget) {
        return Budget.create(req.body);
      } else {
        return foundBudget.update(req.body);
      }
    })
    .then(newBudget => {
      res.status(200).json(newBudget);
    })
    .catch(next);
});

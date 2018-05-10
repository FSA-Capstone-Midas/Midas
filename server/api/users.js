const router = require("express").Router();
const { User } = require("../db/models");
module.exports = router;

router.get("/", (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ["id", "email"]
  })
    .then(users => res.json(users))
    .catch(next);
});

//user log in , return user infos
router.get("/user", (req, res, next) => {});

// user sign up new account
router.post("/user", (req, res, next) => {});

// user edit info
router.put("/update/:id", (req, res, next) => {
  console.log("req.bdoy????", req.body);
  User.findById(req.params.id)
    .then(userToUpdate => {
      return userToUpdate.update(req.body);
    })
    .then(data => res.status(201).json(data));
});

router.get("/user/:userId/budget", (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => {
      const budget = {};
      budget.foodAndDrink = user.foodAndDrink;
      budget.recreation = user.recreation;
      budget.service = user.service;
      budget.shops = user.shops;
      budget.travel = user.travel;
      budget.miscellaneous = user.miscellaneous;
      budget.totalBudgetExpenditure = user.totalBudgetExpenditure;
      res.json(budget);
    })
    .catch(next);
});

router.put("/user/:userId/budget", (req, res, next) => {
  User.update(req.body, {
    where: { id: req.params.userId },
    returning: true
  })
    .then(([affectedCount, affectedRows]) => {
      res.status(200).json(affectedRows[0]);
    })
    .catch(next);
});

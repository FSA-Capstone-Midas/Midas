const router = require("express").Router();
const { User, Rent } = require("../db/models");
module.exports = router;

router.get("/:id", (req, res, next) => {
  console.log(req.params.id, "REQSSSSS");
  User.findAll({
    where: {
      id: req.params.id
    },
    include: [{ model: Rent }],
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ["id", "email"]
  })
    .then(users => {
      console.log("user!!!", users);
      res.json(users);
    })
    .catch(next);
});

// router.get("/id", (req, res, next) => {
//   User.findAll({
//     where: {
//       id: req.params.id,

//       include: [{ model: Rent, required: true }],
//       // explicitly select only the id and email fields - even though
//       // users' passwords are encrypted, it won't help if we just
//       // send everything to anyone who asks!
//       attributes: ["id", "email"]
//     }
//   })
//     .then(users => res.json(users))
//     .catch(next);
// });

//user log in , return user infos
router.get("/user", (req, res, next) => {});

// user sign up new account
router.post("/user", (req, res, next) => {});

// user edit info
router.put("/update/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then(userToUpdate => {
      return userToUpdate.update(req.body);
    })
    .then(data => res.status(201).json(data));
});

router.get("/:userId/budget", (req, res, next) => {
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

router.put("/:userId/budget", (req, res, next) => {
  User.update(req.body, {
    where: { id: req.params.userId },
    returning: true
  })
    .then(([affectedCount, affectedRows]) => {
      const updatedUser = affectedRows[0];
      const updatedBudget = {};
      updatedBudget.foodAndDrink = updatedUser.foodAndDrink;
      updatedBudget.recreation = updatedUser.recreation;
      updatedBudget.service = updatedUser.service;
      updatedBudget.shops = updatedUser.shops;
      updatedBudget.travel = updatedUser.travel;
      updatedBudget.miscellaneous = updatedUser.miscellaneous;
      updatedBudget.totalBudgetExpenditure = updatedUser.totalBudgetExpenditure;
      res.status(200).json(updatedBudget);
    })
    .catch(next);
});

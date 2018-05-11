const router = require("express").Router();
const { Retirement } = require("../db/models");
module.exports = router;

router.get("/", (req, res, next) => {
  Retirement.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    // attributes: ["id", "email"],
  })
    .then(retirementPlan => res.json(retirementPlan))
    .catch(next);
});

//user log in , return user infos
// router.get("/user", (req, res, next) => {});

// // user sign up new account
// router.post("/user", (req, res, next) => {});

// user edit info
// router.put("/update/:id", (req, res, next) => {
//   console.log("req.bdoy????", req.body);
//   Retirement.findById(req.params.id)
//     .then(userToUpdate => {
//       return userToUpdate.update(req.body);
//     })
//     .then(data => res.status(201).json(data));
// });

router.post("/user/:userId", (req, res, next) => {
  Retirement.create({
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
});

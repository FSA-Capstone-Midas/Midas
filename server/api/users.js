const router = require("express").Router();
const { User, Rent } = require("../db/models");
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

// user edit info
router.put("/update/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then(userToUpdate => {
      return userToUpdate.update(req.body);
    })
    .then(data => res.status(201).json(data));
});

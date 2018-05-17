const router = require("express").Router();
const { User, Rent } = require("../db/models");
module.exports = router;

router.get("/:id", (req, res, next) => {
  User.findAll({
    where: {
      id: req.params.id
    },
    include: [{ model: Rent }],
    attributes: ["id", "email"]
  })
    .then(users => {
      res.json(users);
    })
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

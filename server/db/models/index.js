const User = require("./user");
const State = require("./state");
const Retirement = require("./retirement");
const Rent = require("./rent");

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Retirement.belongsTo(User);
Rent.belongsTo(User);
User.hasMany(Rent);

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

module.exports = {
  User,
  State,
  Retirement,
  Rent
};

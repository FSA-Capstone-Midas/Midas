const User = require("./user");
const Retirement = require("./retirement");
const Rent = require("./rent");
const Phone = require("./phone");
const EmergencyGoal = require("./emergencyGoal");
const House = require("./house");
const Budget = require("./budget");

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Retirement.belongsTo(User);
Rent.belongsTo(User);
Phone.belongsTo(User);
User.hasMany(Rent);
User.hasMany(Phone);
EmergencyGoal.belongsTo(User);
House.belongsTo(User);
Budget.belongsTo(User);

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

module.exports = {
  User,
  Retirement,
  Rent,
  EmergencyGoal,
  House,
  Budget,
  Phone
};

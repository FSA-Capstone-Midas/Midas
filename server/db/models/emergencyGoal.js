const Sequelize = require("sequelize");
const db = require("../db");

const emergencyGoal = db.define("emergencyGoal", {
  isEnter: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  duration: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  expense: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  totalExpense: {
    type: Sequelize.VIRTUAL,
    get: function() {
      return this.getDataValue("duration") * this.getDataValue("expense");
    }
  }
});

module.exports = emergencyGoal;

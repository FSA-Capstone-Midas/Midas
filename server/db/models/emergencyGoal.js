const Sequelize = require("sequelize");
const db = require("../db");

const emergencyGoal = db.define("retirement", {
  isEnter: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  duration: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  expense: {
    type: Sequelize.STRING,
    allowNull: false
  },
  totalExpense: {
    type: Sequelize.VIRTUAL,
    get: function() {
      return this.get("duration") * this.get("expense");
    }
  }
});

module.exports = emergencyGoal;

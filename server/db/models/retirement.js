const Sequelize = require("sequelize");
const db = require("../db");

const Retirement = db.define("retirement", {
  birthyear: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  retirementage: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  martialStatus: {
    type: Sequelize.STRING,
  },
  savedSoFar: {
    type: Sequelize.STRING,
  },
  saveEachYear: {
    type: Sequelize.STRING,
  },
  earnEachYear: {
    type: Sequelize.STRING,
  },
  monthlyRetirementSpending: {
    type: Sequelize.STRING,
  },
});

module.exports = Retirement;

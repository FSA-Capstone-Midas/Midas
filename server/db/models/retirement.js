const Sequelize = require("sequelize");
const db = require("../db");

const Retirement = db.define("retirement", {
  birthyear: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  retirementage: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  martialStatus: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  savedSoFar: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  saveEachYear: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  earnEachYear: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  monthlyRetirementSpending: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Retirement;

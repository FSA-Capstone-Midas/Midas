const Sequelize = require("sequelize");
const db = require("../db");

const State = db.define("state", {
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Abbreviation: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = State;

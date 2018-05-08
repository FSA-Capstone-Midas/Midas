const Sequelize = require("sequelize");
const db = require("../db");

const Apartment = db.define("apartment", {
  oneBR: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  twoBR: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Apartment;

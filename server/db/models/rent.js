const Sequelize = require("sequelize");
const db = require("../db");

const Rent = db.define("rent", {
  price: {
    type: Sequelize.INTEGER
  },
  date: {
    type: Sequelize.DATE
  }
});

module.exports = Rent;

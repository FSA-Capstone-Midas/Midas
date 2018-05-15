const Sequelize = require("sequelize");
const db = require("../db");

const Phone = db.define("phone", {
  price: {
    type: Sequelize.INTEGER
  },
  date: {
    type: Sequelize.DATE
  }
});

module.exports = Phone;

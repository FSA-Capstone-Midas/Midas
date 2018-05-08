const Sequelize = require("sequelize");
const db = require("../db");

const House = db.define("house", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = House;

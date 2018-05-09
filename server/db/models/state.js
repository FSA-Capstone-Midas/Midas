const Sequelize = require("sequelize");
const db = require("../db");

const State = db.define("state", {
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  abbreviation: {
    type: Sequelize.STRING,
    allowNull: false
  },
  apartment1Br: {
    type: Sequelize.INTEGER
  },
  apartment2Br: {
    type: Sequelize.INTEGER
  },
  houseAvgSales: {
    type: Sequelize.INTEGER
  },
  houseAvgListing: {
    type: Sequelize.INTEGER
  },
  truliaPopularity: {
    type: Sequelize.INTEGER
  },
  Condo: {
    type: Sequelize.INTEGER
  }
});

module.exports = State;

const Sequelize = require("sequelize");
const db = require("../db");

const House = db.define("house", {
  annualIncome: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  mortgageRate: {
    type: Sequelize.INTEGER,
    allowNull: false,
    get() {
      return this.getDataValue("mortgageRate");
    }
  },
  percentDownPayment: {
    type: Sequelize.INTEGER,
    allowNull: false,
    get() {
      return this.getDataValue("percentDownPayment");
    }
  },
  annualInsurance: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  annualPropertyTax: {
    type: Sequelize.INTEGER,
    allowNull: false,
    get() {
      return this.getDataValue("annualPropertyTax");
    }
  }
});

module.exports = House;

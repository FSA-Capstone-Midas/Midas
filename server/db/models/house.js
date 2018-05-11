const Sequelize = require("sequelize");
const db = require("../db");

const House = db.define("house", {
  annualIncome: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  mortgageRate: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  percentDownPayment: {
    type: Sequelize.INTEGER,
    allowNull: false,
    set(percentDownPayment) {
      this.setDataValue("percentDownPayment", percentDownPayment * 100);
    },
    get() {
      return this.getDataValue("percentDownPayment") / 100;
    }
  },
  annualInsurance: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  annualPropertyTax: {
    type: Sequelize.INTEGER,
    allowNull: false,
    set(percentDownPayment) {
      this.setDataValue("percentDownPayment", percentDownPayment * 100);
    },
    get() {
      return this.getDataValue("percentDownPayment") / 100;
    }
  }
});

module.exports = House;

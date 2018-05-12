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
      return this.getDataValue("mortgageRate") / 100;
    }
  },
  percentDownPayment: {
    type: Sequelize.INTEGER,
    allowNull: false,
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
    get() {
      return this.getDataValue("annualPropertyTax") / 100;
    }
  }
  // aggressivePrice: {
  //   type: Sequelize.VIRTUAL,
  //   set: function() {
  //     return this.getDataValue("annualIncome") * 6.5;
  //   }
  // },
  // downpaymentAggresive: {
  //   type: Sequelize.VIRTUAL,
  //   set: function() {
  //     return (
  //       this.getDataValue("annualIncome") *
  //       6.5 *
  //       this.getDataValue("percentDownPayment")
  //     );
  //   }
  // },
  // monthlyAggresive: {
  //   type: Sequelize.VIRTUAL,
  //   set: function() {
  //     return (
  //       this.getDataValue("annualIncome") *
  //       (1 - this.getDataValue("percentDownPayment")) *
  //       Math.pow(1 + this.getDataValue("mortgageRate"), 30) /
  //       360
  //     );
  //   }
  // }
});

module.exports = House;

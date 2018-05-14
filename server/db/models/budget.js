const Sequelize = require("sequelize");
const db = require("../db");

const Budget = db.define(
  "budget",
  {
    foodAndDrink: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    recreation: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    service: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    shops: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    travel: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    miscellaneous: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  },
  {
    getterMethods: {
      totalBudgetExpenditure() {
        return (
          this.foodAndDrink +
          this.recreation +
          this.service +
          this.shops +
          this.travel +
          this.miscellaneous
        );
      }
    }
  }
);

module.exports = Budget;

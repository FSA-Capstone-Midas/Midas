const crypto = require("crypto");
const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define(
  "user",
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nickName: {
      type: Sequelize.STRING,
    },
    phoneNumber: {
      type: Sequelize.STRING,
    },
    state: {
      type: Sequelize.STRING,
    },
    jobTitle: {
      type: Sequelize.STRING,
    },
    incomeRange: {
      type: Sequelize.STRING,
    },
    birthYear: {
      type: Sequelize.INTEGER,
    },
    birthMonth: {
      type: Sequelize.STRING,
    },
    birthDay: {
      type: Sequelize.INTEGER,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    plaidTokenId: {
      type: Sequelize.STRING,
    },
    plaidItemId: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
      // Making `.password` act like a func hides it when serializing to JSON.
      // This is a hack to get around Sequelize's lack of a "private" option.
      get() {
        return () => this.getDataValue("password");
      },
    },
    salt: {
      type: Sequelize.STRING,
      // Making `.salt` act like a function hides it when serializing to JSON.
      // This is a hack to get around Sequelize's lack of a "private" option.
      get() {
        return () => this.getDataValue("salt");
      },
    },
    googleId: {
      type: Sequelize.STRING,
    },
    foodAndDrink: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    recreation: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    service: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    shops: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    travel: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    miscellaneous: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
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
      },
    },
  }
);

module.exports = User;

/**
 * instanceMethods
 */
User.prototype.correctPassword = function(candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt()) === this.password();
};

/**
 * classMethods
 */
User.generateSalt = function() {
  return crypto.randomBytes(16).toString("base64");
};

User.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash("RSA-SHA256")
    .update(plainText)
    .update(salt)
    .digest("hex");
};

/**
 * hooks
 */
const setSaltAndPassword = user => {
  if (user.changed("password")) {
    user.salt = User.generateSalt();
    user.password = User.encryptPassword(user.password(), user.salt());
  }
};

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);

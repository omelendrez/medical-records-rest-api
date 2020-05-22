'use strict';
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('account', {
    customerId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    credit: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0
    },
    debit: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0
    }
  }, {});
  Account.associate = function (models) {
    // associations can be defined here
  };
  Account.prototype.data = function () {
    let json = this.toJSON()
    return json
  }
  return Account;
};
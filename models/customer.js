'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('customer', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'Nombre de cliente es un campo obligatorio' }
      }
    },
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    observations: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    statusId: {
      type: DataTypes.TINYINT,
      defaultValue: 1
    }
  }, {});
  Customer.associate = function (models) {
    // associations can be defined here
  };
  Customer.prototype.data = function () {
    let json = this.toJSON()
    return json
  }
  return Customer;
};
'use strict'
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('customer', {
    companyId: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'Nombre de cliente es un campo obligatorio' }
      }
    },
    address: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    observations: {
      type: DataTypes.STRING(500),
      defaultValue: ''
    },
    balance: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0
    },
    statusId: {
      type: DataTypes.TINYINT,
      defaultValue: 1
    },
    userId: DataTypes.INTEGER
  }, {})
  Customer.associate = function (models) {
    // associations can be defined here
  }
  Customer.prototype.data = function () {
    let json = this.toJSON()
    return json
  }
  return Customer
}

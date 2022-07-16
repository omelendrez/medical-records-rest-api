'use strict'
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('company', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'Nombre de la veterinaria es un campo obligatorio' }
      }
    },
    address: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    mobile: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    city: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    observations: {
      type: DataTypes.STRING(500),
      defaultValue: ''
    },
    statusId: {
      type: DataTypes.TINYINT,
      defaultValue: 1
    }
  }, {})
  Company.associate = function (models) {
    // associations can be defined here
  }
  Company.prototype.data = function () {
    let json = this.toJSON()
    return json
  }
  return Company
}

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('pet', {
    customerId: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'Nombre de la mascota es un campo obligatorio' }
      }
    },
    type: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'Tipo es un campo obligatorio' }
      }
    },
    breed: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'Raza es un campo obligatorio' }
      }
    },
    sex: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'Sexo es un campo obligatorio' }
      }
    },
    weight: DataTypes.STRING,
    yearBorn: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    observations: {
      type: DataTypes.STRING(5000),
      defaultValue: ''
    },
    statusId: {
      type: DataTypes.TINYINT,
      defaultValue: 1
    }
  }, {});
  Pet.associate = function (models) {
    // associations can be defined here
  };
  Pet.prototype.data = function () {
    let json = this.toJSON()
    return json
  }
  return Pet;
};
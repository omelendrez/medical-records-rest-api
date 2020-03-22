'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('pet', {
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
    yearBorn: DataTypes.STRING,
    observations: DataTypes.STRING,
    statusId: DataTypes.TINYINT
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
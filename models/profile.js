'use strict'
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('profile', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'Nombre de la veterinaria es un campo obligatorio' }
      }
    },
  }, {})
  Profile.associate = function (models) {
    // associations can be defined here
  }
  Profile.prototype.data = function () {
    let json = this.toJSON()
    return json
  }
  return Profile
}

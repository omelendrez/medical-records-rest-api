'use strict'
const bcrypt = require('bcrypt')
const bcryptPromise = require('bcrypt-promise')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    statusId: {
      type: DataTypes.TINYINT,
      defaultValue: 1
    }
  }, {})
  User.associate = function (models) {
    // associations can be defined here
  }
  User.beforeSave(async (user, options) => {
    if (user.changed('password')) {
      const salt = await bcrypt.genSalt(10)
      console.log(salt)
      if (!salt) {
        throw new Error('Salt failed')
      }
      const hash = await bcrypt.hash(user.password, salt)
      if (!hash) {
        throw new Error('Hast failed')
      }
      user.password = hash
    }
  })

  User.prototype.comparePassword = async function (pw) {
    const pass = await bcryptPromise.compare(pw, this.password)
    if (!pass) {
      throw new Error('Usuario o Password incorrectos')
    } else {
      return this
    }
  }

  User.prototype.data = function () {
    const json = { ...this.toJSON(), password: undefined }
    return json
  }
  return User
}
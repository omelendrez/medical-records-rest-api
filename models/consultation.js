'use strict';
module.exports = (sequelize, DataTypes) => {
  const Consultation = sequelize.define('consultation', {
    petID: DataTypes.INTEGER,
    date: DataTypes.DATE,
    diagnosis: DataTypes.STRING,
    treatment: DataTypes.STRING,
    nextConsultation: DataTypes.DATE,
    observations: DataTypes.STRING
  }, {});
  Consultation.associate = function (models) {
    // associations can be defined here
  };
  Consultation.prototype.data = function () {
    let json = this.toJSON()
    return json
  }
  return Consultation;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Consultation = sequelize.define('consultation', {
    petID: DataTypes.INTEGER,
    date: DataTypes.DATE,
    diagnosis: DataTypes.STRING,
    treatment: DataTypes.STRING(5000),
    nextConsultation: {
      type: DataTypes.DATE,
      defaultValue: null
    },
    observations: {
      type: DataTypes.STRING(5000),
      defaultValue: null
    },
    statusId: {
      type: DataTypes.TINYINT,
      defaultValue: 1
    }
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
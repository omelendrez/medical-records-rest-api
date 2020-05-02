'use strict';
module.exports = (sequelize, DataTypes) => {
  const Consultation = sequelize.define('consultation', {
    petID: DataTypes.INTEGER,
    date: DataTypes.DATE,
    diagnosis: DataTypes.STRING,
    treatment: DataTypes.STRING(5000),
    nextConsultation: {
      type: DataTypes.DATE,
      defaultValue: ''
    },
    observations: {
      type: DataTypes.STRING(5000),
      defaultValue: ''
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0
    },
    paymentMethod: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    paid: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0
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
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Consultation = sequelize.define('consultation', {
    customerId: DataTypes.INTEGER,
    petId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    anamnesis: DataTypes.STRING(500),
    clinicalExamination: DataTypes.STRING(500),
    diagnosis: DataTypes.STRING(500),
    treatment: DataTypes.STRING(500),
    vaccination: DataTypes.STRING(500),
    deworming: DataTypes.STRING(500),
    nextConsultation: {
      type: DataTypes.DATE,
      defaultValue: null
    },
    observations: {
      type: DataTypes.STRING,
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
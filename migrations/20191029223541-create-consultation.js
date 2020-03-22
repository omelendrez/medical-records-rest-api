'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('consultations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      petID: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      diagnosis: {
        type: Sequelize.STRING
      },
      treatment: {
        type: Sequelize.STRING
      },
      nextConsultation: {
        type: Sequelize.DATE
      },
      observations: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('consultations');
  }
};
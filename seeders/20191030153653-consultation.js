'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('consultations', [{
      petID: 1,
      date: '2020-01-15',
      diagnosis: 'Puñalada en la espalda',
      treatment: 'Sutura',
      nextConsultation: '2020-03-05',
      observations: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      petID: 2,
      date: '2020-02-25',
      diagnosis: 'Balazo en la oreja',
      treatment: 'Cafiaspirinas',
      nextConsultation: null,
      observations: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      petID: 1,
      date: '2020-03-15',
      diagnosis: 'Puñalada en la espalda',
      treatment: 'Se le da el alta',
      nextConsultation: null,
      observations: '',
      createdAt: new Date(),
      updatedAt: new Date()

    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('consultations', null, {});
  }
};

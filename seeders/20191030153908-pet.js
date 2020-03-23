'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pets', [{
      customerId: 1,
      name: 'Foster',
      type: 'Can',
      breed: 'Ovejero Belga',
      sex: 'M',
      weight: '45kg',
      yearBorn: '1990',
      observations: 'Bueno',
      statusId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      customerId: 1,
      name: 'Michifuz',
      type: 'Felino',
      breed: 'Mestizo',
      sex: 'M',
      weight: '',
      yearBorn: '2019',
      observations: 'Medio loco',
      statusId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pets', null, {});
  }
};

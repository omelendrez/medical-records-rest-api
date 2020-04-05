'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('statuses', [{
      name: 'Active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Inactive',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('statuses', null, {});
  }
};

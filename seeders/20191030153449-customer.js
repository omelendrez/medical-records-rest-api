'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('customers', [{
      name: 'Omar Melendrez',
      address: 'Alberdi 2678',
      phone: '2915754922',
      email: 'omar.melendrez@gmail.com',
      statusId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ema Valaco',
      address: 'Su casa',
      phone: '123456',
      email: 'ema@gmail.com',
      statusId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mati Manchinelli',
      address: 'Su casa',
      phone: '54621',
      email: 'mati@gmail.com',
      statusId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers', null, {});
  }
};

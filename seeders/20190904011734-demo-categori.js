'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('categoris', [
        {
          name: 'Promo',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Makanan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Buah',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Minuman',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

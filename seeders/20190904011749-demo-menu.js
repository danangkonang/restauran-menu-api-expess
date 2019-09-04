'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkInsert('menus', [
      {
        idCategori: 1,
        name: 'nanas',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 1,
        name: 'Aqua',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 1,
        name: 'Ayam goreng',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 1,
        name: 'jus',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 1,
        name: 'Pecel',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 1,
        name: 'Nasi goreng',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 2,
        name: 'Nasi goreng',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 2,
        name: 'Ayam bakar',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 2,
        name: 'Ayam bakar',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 2,
        name: 'Opor ayam',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 2,
        name: 'Nasi padang',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 2,
        name: 'bakso',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 3,
        name: 'Jeruk',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 3,
        name: 'Apel',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 3,
        name: 'Rambutan',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 3,
        name: 'Pepaya',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 3,
        name: 'Semangka',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 3,
        name: 'Anggur',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 4,
        name: 'Aqua',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 4,
        name: 'Teh anget',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 4,
        name: 'Jus',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 4,
        name: 'Air putih',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 4,
        name: 'Teh tawar',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idCategori: 4,
        name: 'Sirup',
        price: 5000,
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

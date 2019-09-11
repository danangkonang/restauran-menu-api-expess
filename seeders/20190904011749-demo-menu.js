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
        image:'../images/menu/1.jpg'
      },
      {
        idCategori: 1,
        name: 'Aqua',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/2.jpg'
      },
      {
        idCategori: 1,
        name: 'Ayam goreng',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/3.jpg'
      },
      {
        idCategori: 1,
        name: 'jus',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/4.jpg'
      },
      {
        idCategori: 1,
        name: 'Pecel',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/5.jpg'
      },
      {
        idCategori: 1,
        name: 'Nasi goreng',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/6.jpg'
      },
      {
        idCategori: 2,
        name: 'Nasi goreng',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/7.jpg'
      },
      {
        idCategori: 2,
        name: 'Ayam bakar',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/8.jpg'
      },
      {
        idCategori: 2,
        name: 'Ayam bakar',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/9.jpg'
      },
      {
        idCategori: 2,
        name: 'Opor ayam',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/10.jpg'
      },
      {
        idCategori: 2,
        name: 'Nasi padang',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/11.jpg'
      },
      {
        idCategori: 2,
        name: 'bakso',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/12.jpg'
      },
      {
        idCategori: 3,
        name: 'Jeruk',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/13.jpg'
      },
      {
        idCategori: 3,
        name: 'Apel',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/14.jpg'
      },
      {
        idCategori: 3,
        name: 'Rambutan',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/15.jpg'
      },
      {
        idCategori: 3,
        name: 'Pepaya',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/16.jpg'
      },
      {
        idCategori: 3,
        name: 'Semangka',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/17.jpg'
      },
      {
        idCategori: 3,
        name: 'Anggur',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/18.jpg'
      },
      {
        idCategori: 4,
        name: 'Aqua',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/19.jpg'
      },
      {
        idCategori: 4,
        name: 'Teh anget',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/20.jpg'
      },
      {
        idCategori: 4,
        name: 'Jus',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/21.jpg'
      },
      {
        idCategori: 4,
        name: 'Air putih',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/22.jpg'
      },
      {
        idCategori: 4,
        name: 'Teh tawar',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/23.jpg'
      },
      {
        idCategori: 4,
        name: 'Sirup',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'../images/menu/24.jpg'
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

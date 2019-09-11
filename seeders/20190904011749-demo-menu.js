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
        image:'https://i2.wp.com/resepkoki.id/wp-content/uploads/2016/08/pineapple.jpg?fit=1200%2C1200&ssl=1'
      },
      {
        idCategori: 1,
        name: 'Aqua',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/11/30/0/0_251b7eda-9a80-4312-ac72-2e2bf9d5eb9d_384_384.jpg'
      },
      {
        idCategori: 1,
        name: 'Ayam goreng',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'https://keeprecipes.com/sites/keeprecipes/files/imagecache/recipe_large/104127_1419594390_0.jpg'
      },
      {
        idCategori: 1,
        name: 'jus',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'https://i1.wp.com/www.beritainfo.web.id/wp-content/uploads/2018/01/cara-membuat-jus-apel-yang-enak.png?fit=392%2C411&ssl=1'
      },
      {
        idCategori: 1,
        name: 'Pecel',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'https://cdn.idntimes.com/content-images/post/20180423/pecel-bledek-nganjuk-cdd756aa7f4a83320af3152556cc1a63_600x400.jpg'
      },
      {
        idCategori: 1,
        name: 'Nasi goreng',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'http://www.dapurkobe.co.id/wp-content/uploads/nasi-goreng-seafood.jpg'
      },
      {
        idCategori: 2,
        name: 'Nasi goreng',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'http://www.dapurkobe.co.id/wp-content/uploads/nasi-goreng-seafood.jpg'
      },
      {
        idCategori: 2,
        name: 'Ayam bakar',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'https://selerasa.com/wp-content/uploads/2015/12/images_daging_ayam-bakar-pedas-manis.jpg'
      },
      {
        idCategori: 2,
        name: 'Ayam bakar',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'https://keeprecipes.com/sites/keeprecipes/files/imagecache/recipe_large/104127_1419594390_0.jpg'
      },
      {
        idCategori: 2,
        name: 'Opor ayam',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'https://i1.wp.com/www.romadecade.org/wp-content/uploads/2019/03/2018_03_12_42055_1520818861._largeetawi.jpg?resize=750%2C502&ssl=1'
      },
      {
        idCategori: 2,
        name: 'Nasi padang',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1558111232/xvc1g9xwfpzolnmhnuxk.jpg'
      },
      {
        idCategori: 2,
        name: 'bakso',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'https://assets-a2.kompasiana.com/items/album/2017/07/06/cara-membuat-bakso-sapi-kenyal-alami-595e4d19907a61d81a89575f.jpg?t=o&v=350'
      },
      {
        idCategori: 3,
        name: 'Jeruk',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'https://awsimages.detik.net.id/customthumb/2013/02/05/900/jerukcntt.jpg?w=700&q=90'
      },
      {
        idCategori: 3,
        name: 'Apel',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/05/14/2533869461.jpg'
      },
      {
        idCategori: 3,
        name: 'Rambutan',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'https://5.imimg.com/data5/BO/CK/MY-3040698/rambutan-fruit-500x500.jpg'
      },
      {
        idCategori: 3,
        name: 'Pepaya',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//94/MTA-2433397/freshbox_freshbox-pepaya-california-buah--1---1-5-kg-_full02.jpg'
      },
      {
        idCategori: 3,
        name: 'Semangka',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'https://assets-a2.kompasiana.com/items/album/2019/06/21/khasiat-buah-semangka-5d0c8234097f3655171699b2.jpeg?t=o&v=350'
      },
      {
        idCategori: 3,
        name: 'Anggur',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'https://bibitbunga.com/wp-content/uploads/2015/08/anggur-merah-lokal.jpg'
      },
      {
        idCategori: 4,
        name: 'Aqua',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/11/30/0/0_251b7eda-9a80-4312-ac72-2e2bf9d5eb9d_384_384.jpg'
      },
      {
        idCategori: 4,
        name: 'Teh anget',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'https://www.jagel.id/api/listimage/v/Teh-Anget-0-6385d05a4e1a0d23.jpg'
      },
      {
        idCategori: 4,
        name: 'Jus',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'https://i1.wp.com/www.beritainfo.web.id/wp-content/uploads/2018/01/cara-membuat-jus-apel-yang-enak.png?fit=392%2C411&ssl=1'
      },
      {
        idCategori: 4,
        name: 'Air putih',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1557566255/xejfovlniibjlumrbrif.jpg'
      },
      {
        idCategori: 4,
        name: 'Teh tawar',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'https://scontent-lga3-1.cdninstagram.com/vp/0d229aa35000ef0f75ecd5dd913f3774/5DFD27B8/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/68909881_1348319135306021_7834042714883107980_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=105'
      },
      {
        idCategori: 4,
        name: 'Sirup',
        price: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
        image:'https://www.honestdocs.id/system/image_attachments/images/000/012/783/medium/solac-sirup-120ml-1.jpg'
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

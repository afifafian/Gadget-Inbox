'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', 
    [
      {
        name: 'Laptop Gaming',
        image_url: "https://cdn.mos.cms.futurecdn.net/huTCjGmnWHJBEFxkRMbWFY-650-80.jpg.webp",
        price: 21000000,
        stock: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mouse Gaming',
        image_url: "https://assets1.ignimgs.com/2020/02/24/logitechg6041582587044824.jpg",
        price: 1200000,
        stock: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'TV',
        image_url: "https://ecs7.tokopedia.net/img/cache/700/product-1/2020/6/21/409743068/409743068_eabc2cad-5513-4f11-a53f-8da1990b49cc_1080_1080.jpg",
        price: 11000000,
        stock: 231,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

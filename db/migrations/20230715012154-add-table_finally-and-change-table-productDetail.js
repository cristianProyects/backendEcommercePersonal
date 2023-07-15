'use strict';
const {PRODUCT_DETAIL_TABLE,ProdcutDetailSchema} = require('../models/productDetailModel')
const {LIST_PRODUCT_TABLE,ListProductSchema} = require('../models/listProduct')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    // await queryInterface.dropTable(PRODUCT_DETAIL_TABLE,{});
    await queryInterface.createTable(LIST_PRODUCT_TABLE,ListProductSchema)
    // await queryInterface.createTable(PRODUCT_DETAIL_TABLE,ProdcutDetailSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(LIST_PRODUCT_TABLE)
    // await queryInterface.dropTable(PRODUCT_DETAIL_TABLE)
  }
};

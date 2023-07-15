'use strict';
const {PRODUCT_DETAIL_TABLE,ProdcutDetailSchema} = require('../models/productDetailModel')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(PRODUCT_DETAIL_TABLE, ProdcutDetailSchema.orderId.field,ProdcutDetailSchema.orderId)
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(PRODUCT_DETAIL_TABLE, ProdcutDetailSchema.orderId.field);
  }
};

'use strict';

const {PRODUCT_DETAIL_TABLE,ProdcutDetailSchema} = require('../models/productDetailModel')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.changeColumn(PRODUCT_DETAIL_TABLE,ProdcutDetailSchema.listProductId.field,ProdcutDetailSchema.listProductId)
  },

};

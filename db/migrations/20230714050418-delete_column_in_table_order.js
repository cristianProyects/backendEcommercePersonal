'use strict';
const {ORDER_TABLE,OrderSchema} = require('../models/orderModel')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, ) {
    await queryInterface.removeColumn(ORDER_TABLE,OrderSchema.productDetailId.field,{})
  },

};

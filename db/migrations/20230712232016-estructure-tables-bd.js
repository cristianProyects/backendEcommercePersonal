
'use strict';
const {PRODUCT_TABLE,ProductSchema} = require('../models/productsModel')
const {INGREDIENT_TABLE,IngredientSchema} = require('../models/ingredientModel')
const {PRODUCT_DETAIL_TABLE,ProdcutDetailSchema} = require('../models/productDetailModel')
const {USER_TABLE,UserSchema} = require('../models/usersModel')
const {CUSTOMER_TABLE,CustomerSchema} = require('../models/customerModel')
const {ORDER_TABLE,OrderSchema} = require('../models/orderModel')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PRODUCT_TABLE,ProductSchema);
    await queryInterface.createTable(INGREDIENT_TABLE,IngredientSchema);
    await queryInterface.createTable(PRODUCT_DETAIL_TABLE,ProdcutDetailSchema);
    await queryInterface.createTable(USER_TABLE,UserSchema);
    await queryInterface.createTable(CUSTOMER_TABLE,CustomerSchema);
    await queryInterface.createTable(ORDER_TABLE,OrderSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(INGREDIENT_TABLE);
    await queryInterface.dropTable(PRODUCT_DETAIL_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(ORDER_TABLE);
  }
};

const { Product,ProductSchema} = require('../models/productsModel');
const {Ingredient,IngredientSchema} = require('../models/ingredientModel');
const {ProductDetail,ProdcutDetailSchema} = require('../models/productDetailModel');
const {User,UserSchema} = require('../models/usersModel');
const {Customer,CustomerSchema} = require('../models/customerModel');
const {Order,OrderSchema} = require('../models/orderModel');

function setUpModel(sequelize){ 
    Product.init(ProductSchema, Product.config( sequelize )); 
    Ingredient.init(IngredientSchema, Ingredient.config( sequelize )); 
    ProductDetail.init(ProdcutDetailSchema, ProductDetail.config( sequelize )); 
    User.init(UserSchema, User.config( sequelize )); 
    Customer.init(CustomerSchema, Customer.config( sequelize )); 
    Order.init(OrderSchema, Order.config( sequelize )); 
    // Iniciamos las relaciones
    Product.associate(sequelize.models);
    Ingredient.associate(sequelize.models);
    ProductDetail.associate(sequelize.models);
    User.associate(sequelize.models);
    Customer.associate(sequelize.models);
    Order.associate(sequelize.models);
}

module.exports = setUpModel;
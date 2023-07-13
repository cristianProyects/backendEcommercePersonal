const Joi = require('joi');

const portion = Joi.number().integer();
const productId = Joi.number().integer();
const ingredientId = Joi.number().integer();


const getProductDetailSchema = Joi.object({
    productId: productId.required(),
    ingredientId: ingredientId.required(),
});

const createProductDetailSchema = Joi.object({
    portion: portion.required(),
    productId: productId.required(),
    ingredientId: ingredientId.required(),
});

const updateProductDetailSchema = Joi.object({
    portion: portion.required(),
});

module.exports = { getProductDetailSchema, createProductDetailSchema, updateProductDetailSchema };

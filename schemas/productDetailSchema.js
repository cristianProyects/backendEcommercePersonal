const Joi = require('joi');

const id = Joi.number().integer();
const portion = Joi.number().integer();
const ingredientId = Joi.number().integer();
const listProductId = Joi.number().integer();


const getProductDetailSchema = Joi.object({
    id: id.required(),
});

const createProductDetailSchema = Joi.object({
    portion: portion.required(),
    ingredientId: ingredientId.required(),
    listProductId: listProductId.required(),
});

const updateProductDetailSchema = Joi.object({
    portion: portion,
    ingredientId: ingredientId,
});

module.exports = { getProductDetailSchema, createProductDetailSchema, updateProductDetailSchema };

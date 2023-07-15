const Joi = require('joi');

const productId = Joi.number().integer();
const orderId = Joi.number().integer();


const getProdcutListSchema = Joi.object({
    orderId: orderId.required(),
});

const createProdcutListSchema = Joi.object({
    productId: productId.required(),
    orderId: orderId.required(),
});

const updateProdcutListSchema = Joi.object({
    productId: productId.required(),
    orderId: orderId.required(),
});

module.exports = { getProdcutListSchema, createProdcutListSchema, updateProdcutListSchema };

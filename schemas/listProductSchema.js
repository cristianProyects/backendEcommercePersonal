const Joi = require('joi');

const id = Joi.number().integer();
const productId = Joi.number().integer();
const orderId = Joi.number().integer();


const getProdcutListSchema = Joi.object({
    id: id.required()
});

const createProdcutListSchema = Joi.object({
    productId: productId.required(),
    orderId: orderId.required(),
});

const updateProdcutListSchema = Joi.object({
    productId: productId
});

module.exports = { getProdcutListSchema, createProdcutListSchema, updateProdcutListSchema };

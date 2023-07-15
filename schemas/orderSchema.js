const Joi = require('joi');

const id = Joi.number().integer();
const customerId = Joi.number().integer();
const productDetailId = Joi.number().integer();

const getOrderSchema = Joi.object({
    id: id.required(),
});

const createOrderSchema = Joi.object({
    customerId: customerId.required(),
});

const updateOrderSchema = Joi.object({
    customerId,
    productDetailId
});

module.exports = { getOrderSchema, createOrderSchema, updateOrderSchema };

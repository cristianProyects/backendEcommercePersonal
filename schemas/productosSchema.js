const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const price = Joi.number().integer();

const getProductSchema = Joi.object({
    id: id.required(),
});

const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
});

const updateProductSchema = Joi.object({
    name,
    price
});

module.exports = { getProductSchema, createProductSchema, updateProductSchema };

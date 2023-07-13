const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const price = Joi.number().integer();

const getIngredientSchema = Joi.object({
    id: id.required(),
});

const createIngredientSchema = Joi.object({
    name: name.required(),
    price: price.required(),
});

const updateIngredientSchema = Joi.object({
    name,
    price
});

module.exports = { getIngredientSchema, createIngredientSchema, updateIngredientSchema };

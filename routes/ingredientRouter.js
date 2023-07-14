const express = require('express');
const router = express();

const ingredientService = require('../services/ingredientServices');
const ingredient = new ingredientService();

const validatorHandler = require('../middlewares/validation');
const { createIngredientSchema,getIngredientSchema,updateIngredientSchema } = require('../schemas/ingredientSchema');
const { checkRoles } = require('../middlewares/auth');

router.get('/', async (req, res, next ) => {
    try {
        res.send(await ingredient.get())
    } catch (error) {
        next(error);
    }
});
router.post('/',
    checkRoles(['admin','seller']),
    validatorHandler(createIngredientSchema,'body'),
    async (req, res, next ) => {
    try {
        res.send(await ingredient.create(req.body))
    } catch (error) {
        next(error);
    }
});
router.patch('/:id',
    checkRoles(['admin','seller']),
    validatorHandler(getIngredientSchema,'params'),
    validatorHandler(updateIngredientSchema,'body'),
    async (req, res, next ) => {
    try {
        const { id } = req.params
        res.send( await ingredient.update( req.body, id) )
    } catch (error) {
        next(error);
    }
});
router.delete('/:id',
    checkRoles(['admin','seller']),
    validatorHandler(getIngredientSchema,'params'),
    async (req, res, next ) => {
    try {
        const { id } = req.params
        res.send(await ingredient.delete(id))
    } catch (error) {
        next(error);
    }
});

module.exports = router;


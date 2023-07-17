const express = require('express');
const router = express();

const listProductService = require('../services/listProductServices');
const listProduct = new listProductService();

const validatorHandler = require('../middlewares/validation');
const { createProdcutListSchema,getProdcutListSchema,updateProdcutListSchema} = require('../schemas/listProductSchema');
const { checkRoles } = require('../middlewares/auth');

router.get('/', async (req, res, next ) => {
    try {
        res.send(await listProduct.get())
    } catch (error) {
        next(error);
    }
});
router.post('/',
    validatorHandler(createProdcutListSchema,'body'),
    async (req, res, next ) => {
    try {
        res.send(await listProduct.create(req.body))
    } catch (error) {
        next(error);
    }
});
router.patch('/:id',
    validatorHandler(getProdcutListSchema,'params'),
    validatorHandler(updateProdcutListSchema,'body'),
    async (req, res, next ) => {
    try {
        const { id } = req.params
        res.send( await listProduct.update( id , req.body ) )
    } catch (error) {
        next(error);
    }
});
router.delete('/:id',
    validatorHandler(getProdcutListSchema,'params'),
    async (req, res, next ) => {
    try {
        const { id } = req.params
        res.send( await listProduct.delete( id ) )
    } catch (error) {
        next(error);
    }
});

module.exports = router;
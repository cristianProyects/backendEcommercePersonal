const express = require('express');
const router = express();

const productService = require('../services/productServices');
const product = new productService();

const validatorHandler = require('../middlewares/validation');
const { createProductSchema,getProductSchema,updateProductSchema } = require('../schemas/productosSchema');
const { checkRoles } = require('../middlewares/auth');

router.get('/', async (req, res, next ) => {
    try {
        res.send(await product.get())
    } catch (error) {
        next(error);
    }
});
router.post('/',
    checkRoles(['admin','seller']),
    validatorHandler(createProductSchema,'body'),
    async (req, res, next ) => {
    try {
        res.send(await product.create(req.body))
    } catch (error) {
        next(error);
    }
});
router.patch('/:id',
    checkRoles(['admin','seller']),
    validatorHandler(getProductSchema,'params'),
    validatorHandler(updateProductSchema,'body'),
    async (req, res, next ) => {
    try {
        const { id } = req.params
        res.send( await product.update( req.body, id) )
    } catch (error) {
        next(error);
    }
});
router.delete('/:id',
    checkRoles(['admin','seller']),
    validatorHandler(getProductSchema,'params'),
    async (req, res, next ) => {
    try {
        const { id } = req.params
        res.send(await product.delete(id))
    } catch (error) {
        next(error);
    }
});

module.exports = router;


const express = require('express');
const router = express();

const orderService = require('../services/orderServices');
const order = new orderService();

const validatorHandler = require('../middlewares/validation');
const { createOrderSchema,getOrderSchema,updateOrderSchema } = require('../schemas/orderSchema');
const { checkRoles } = require('../middlewares/auth');

router.get('/', async (req, res, next ) => {
    try {
        res.send(await order.get())
    } catch (error) {
        next(error);
    }
});
router.post('/',
    validatorHandler(createOrderSchema,'body'),
    async (req, res, next ) => {
    try {
        res.send(await order.create(req.body))
    } catch (error) {
        next(error);
    }
});
router.delete('/:id',
    validatorHandler(getOrderSchema,'params'),
    async (req, res, next ) => {
    try {
        const { id } =  req.params
        res.send(await order.delete(id))
    } catch (error) {
        next(error);
    }
});

module.exports = router;
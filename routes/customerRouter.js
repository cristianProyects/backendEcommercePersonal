const express = require('express');
const router = express();

const customerService = require('../services/customerServies');
const customer = new customerService();

const validatorHandler = require('../middlewares/validation');
const { updateCustomerSchema, getCustomerSchema, createCustomerSchema } = require('../schemas/customerSchema');

router.get('/',async (req, res, next ) => {
    try {
        res.send(await customer.find())
    } catch (error) {
        next(error);
    }
});
router.get('/:id',
    validatorHandler(getCustomerSchema,'params'),
    async (req, res, next ) => {
    try {
        const { id }= req.params;
        res.send(await customer.findOne(id))
    } catch (error) {
        next(error);
    }
});
router.post('/',
    validatorHandler(createCustomerSchema,'body'),
    async (req, res, next ) => {
    try {
        res.send(await customer.create(req.body))
    } catch (error) {
        next(error);
    }
});
router.patch('/:id',
    validatorHandler(getCustomerSchema,'params'),
    validatorHandler(updateCustomerSchema,'body'),
    async (req, res, next ) => {
    try {
        const { id }= req.params;
        res.send(await customer.update(req.body,id))
    } catch (error) {
        next(error);
    }
});
router.delete('/:id',
    validatorHandler(getCustomerSchema,'params'),
    async (req, res, next ) => {
    try {
        const { id } = req.params;
        res.send(await customer.delete(id))
    } catch (error) {
        next(error);
    }
});

module.exports = router;
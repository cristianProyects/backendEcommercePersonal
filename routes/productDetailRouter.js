const express = require('express');
const router = express();

const productDetailtService = require('../services/productDetailServices');
const productDetail = new productDetailtService();

const validatorHandler = require('../middlewares/validation');
const { createProductDetailSchema,getProductDetailSchema,updateProductDetailSchema } = require('../schemas/productDetailSchema');
const { checkRoles } = require('../middlewares/auth');

router.get('/', async (req, res, next ) => {
    try {
        res.send(await productDetail.get())
    } catch (error) {
        next(error);
    }
});
router.post('/',
    validatorHandler(createProductDetailSchema,'body'),
    async (req, res, next ) => {
    try {
        res.send(await productDetail.create(req.body))
    } catch (error) {
        next(error);
    }
});

module.exports = router;
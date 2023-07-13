const express = require('express');
const passport = require('passport');
const jsonWebToken = require('jsonwebtoken');
const { config } = require('../config/config');
const validatorHandler = require('../middlewares/validation');
const { createCustomerSchema } = require('../schemas/customerSchema');

const customerService = require('../services/customerServies');
const customer = new customerService();

const router = express.Router();

router.post('/login',
    passport.authenticate('local', {session: false}),
    async (req, res, next) => {
        try {
            const user = req.user;
            const payload = {
            sub: user.id,
            role: user.role,
            // expiresIn: 1000
            }
            const token =  jsonWebToken.sign(payload, config.jwtSecret);
            res.json({
            user,
            token
            });
        } catch (error) {
            next(error);
            
        }
    }
);
router.post('/customer',
    validatorHandler(createCustomerSchema,'body'),// valida los datos antes de ser ingresados a la bd 
    async (req, res, next ) => {
        try {
            res.send(await customer.create(req.body))
        } catch (error) {
            next(error);
        }
});

module.exports = router;
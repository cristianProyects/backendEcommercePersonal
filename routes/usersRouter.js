const express = require('express');
const router = express();

const userService = require('../services/userServices');
const user = new userService();

const validatorHandler = require('../middlewares/validation');
const { createUserSchema, updateUserSchema, getUserSchema } = require('../schemas/userSchema');
const { checkRoles } = require('../middlewares/auth');

router.get('/', async (req, res, next ) => {
    try {
        res.send(await user.getUsers())
    } catch (error) {
        next(error);
    }
});
router.post('/',
    checkRoles(['admin','seller']),
    validatorHandler(createUserSchema,'body'),// valida los datos antes de ser ingresados a la bd 
    async (req, res, next ) => {
        try {
            res.send(await user.createUsers(req.body))
        } catch (error) {
            next(error);
        }
});
router.patch('/:id',
    checkRoles(['admin','seller']),
    validatorHandler(getUserSchema,'params'),// valida los datos antes de ser ingresados a la bd 
    validatorHandler(updateUserSchema,'body'),// valida los datos antes de ser ingresados a la bd 
    async (req, res, next ) => {
        try {
            const { id } = req.params
            res.send(await user.updateUsers(req.body, id))
        } catch (error) {
            next(error);
        }
});
router.delete('/:id',
    checkRoles(['admin']),
    validatorHandler(getUserSchema,'params'),// valida los datos antes de ser ingresados a la bd 
    async (req, res, next ) => {
        try {
            const { id } = req.params
            res.send(await user.deleteUsers(id))
        } catch (error) {
            next(error);
        }
});

module.exports = router;
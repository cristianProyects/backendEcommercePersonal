const express = require('express');
const passport = require('passport');
const authRoute = require('./authRouter');
const userService = require('./usersRouter');
const customerService = require('./customerRouter');

const mainRouter = (app)=>{
    const router = express.Router(); // PERMITE PETICIONES HTTP
    app.use('/api/v1', router); // Define el path 
        router.use('/auth',authRoute); // Le menciono que endpoints va usar para (/api/v1)/auth

        router.use(passport.authenticate('jwt', { session: false }));// Proteger rutas, solo las que  estan debajo de esta linea

        router.use('/user', userService);
        router.use('/customer', customerService);
}

module.exports =  mainRouter ;
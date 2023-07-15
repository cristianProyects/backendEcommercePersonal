const express = require('express');
const passport = require('passport');
const authRoute = require('./authRouter');
const userService = require('./usersRouter');
const customerService = require('./customerRouter');
const productService = require('./productRouter');
const ingredientService = require('./ingredientRouter');
const productDetialService = require('./productDetailRouter');
const orderService = require('./orderRouter');
const listProductService = require('./listProductRouter');

const mainRouter = (app)=>{
    const router = express.Router(); // PERMITE PETICIONES HTTP
    app.use('/api/v1', router); // Define el path 
        router.use('/auth',authRoute); // Le menciono que endpoints va usar para (/api/v1)/auth

        router.use(passport.authenticate('jwt', { session: false }));// Proteger rutas, solo las que  estan debajo de esta linea

        router.use('/user', userService);
        router.use('/customer', customerService);
        router.use('/product', productService);
        router.use('/ingredient', ingredientService);
        router.use('/listProduct', listProductService);
        router.use('/productDetail', productDetialService);
        router.use('/order', orderService);
}

module.exports =  mainRouter ;
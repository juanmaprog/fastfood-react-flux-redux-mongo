// import { router } from 'express';
const cartcontrollers = require('../controllers/cart.controllers');
const router = require ('express').Router();

//ENDPOINTS DE LA LOGICA DE EL CARRITO.
//localhost:3000/carts
    //========== GET CART FROM USER ==========
router.get('/:idUser' , cartcontrollers.userCart);

    //===========POST===========//
router.post('/newCart', cartcontrollers.createdCart);

//============UPDATE==============//
//router.put('/:idCart', cartcontrollers.updateCart);

//=========== DELETE ===========	    

//=========== DELETE ===========
//router.get('/delete' , cartcontrollers.deleteCart);	//router.get('/delete' , cartcontrollers.deleteCart);






module.exports = router;//exportamos el archivo user.router mediante la siguiente linea.

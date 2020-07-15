// import { router } from 'express';
const cartcontrollers = require('../controllers/cart/cart.controllers');
const router = require ('express').Router();

//ENDPOINTS DE LA LOGICA DE EL CARRITO.
//localhost:3000/carts
    //========== GET ALL CARTS ==========
router.get('/' , cartcontrollers.allCarts);

    //========== GET CART FROM USER ==========
router.get('/:idUser' , cartcontrollers.userCart);

    //===========POST===========//
router.post('/newCart', cartcontrollers.createdCart);

    //============UPDATE==============//
//router.put('/:idCart', cartcontrollers.updateCart);

    //=========== DELETE ===========
//router.get('/delete' , cartcontrollers.deleteCart);

    //=========== CART TO DOCUMENT AND DELETED CART ============


    //========== SAVE CART =========






module.exports = router;//exportamos el archivo user.router mediante la siguiente linea.

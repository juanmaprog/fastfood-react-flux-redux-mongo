//import { router } from 'express';
const productControllers = require('../controllers/product.controllers');
const router = require ('express').Router();

//ENDPOINTS DE LA LOGICA DE EL PRODUCTO.

    //========== GET ALL CARTS ==========
router.get('/', productControllers.allProducts);

module.exports = router;
//import { router } from 'express';
const productcontrollers = require('../controllers/product.controllers');
const router = require ('express').Router();

//ENDPOINTS DE LA LOGICA DE EL PRODUCTO.

//========== GET ALL PRODUCTS ==========
router.get('/', productcontrollers.allProducts);

//======POST======//
router.post('/newProduct', productcontrollers.createdProduct);

//======UPDATE======//
router.put('/updateProduct/:idProduct', productcontrollers.updateProduct);

//======DELETE======//
router.delete('/deleteProduct/:idProduct' , productcontrollers.deleteProduct)//endpoint de la ruta de borrado de carrito

module.exports = router;
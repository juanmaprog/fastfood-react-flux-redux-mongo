//import { router } from 'express';
const ingredientcontrollers = require('../controllers/ingredients.controllers');
const router = require('express').Router();


//ENDPOINTS DE LA LOGICA DE EL PRODUCTO.

//========== GET ALL INGREDIENTS ==========
router.get('/', ingredientcontrollers.allIngredients);

//======POST======//
router.post('/newIngredient', ingredientcontrollers.createdIngredient);

//======UPDATE======//
router.put('/updateIngredient/:idIngredient', ingredientcontrollers.updateIngredient);

//======DELETE======//
router.delete('/deleteIngredient/:idIngredient', ingredientcontrollers.deleteIngredient);

//EXPORTS
module.exports = router;
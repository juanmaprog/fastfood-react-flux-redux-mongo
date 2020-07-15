import { router } from 'express';
const ingredientscontrollers = require('../controllers/ingredients/ingredients.controllers');
const router = require('express').Router();

router.get('/', ingredientscontrollers.allIngred);

export default router;
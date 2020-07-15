//import { router } from 'express';
const cartcontrollers = require('../helpers/helperString');
const router = require ('express').Router();

router.get('/carts', cartcontrollers.allCarts);

export default router;
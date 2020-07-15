import { router } from 'express';
const familycontrollers = require('../helpers/helperString');
const router = require ('express').Router();

router.get('/', familycontrollers.allFamily);

export default router;
//import { router } from 'express';
const familycontrollers = require("../controllers/family.controllers");
const router = require("express").Router();

//======GET ALL FAMILIES======//
router.get('/', familycontrollers.allFamily);

//======GET FAMILY======//
router.get("/:id", familycontrollers.getFamily);

//======POST======//
router.post("/newFamily", familycontrollers.postFamily);

//======UPDATE======//
router.put('/updateFamily/:idFamily', familycontrollers.updateFamily);

//======DELETE======//
router.delete('/deletedFamily/:idFamily', familycontrollers.deleteFamily);

module.exports = router;
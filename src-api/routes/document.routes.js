const router = require("express").Router();
const documentcontrollers = require("../controllers/document.controllers");

//====== GET ======//
//ALL DOCUMENTS
router.get("/", documentcontrollers.allDocuments);

//======POST======//
router.post("/createDocument", documentcontrollers.createDocument);

//======UPDATE======//

//======DELETE======//

module.exports = router;

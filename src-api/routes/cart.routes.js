const cartcontrollers = require("../controllers/cart.controllers");
const router = require("express").Router();

//======ALL CARTS=======//
router.get("/", cartcontrollers.allCarts);

//======GET CART FROM USER======//
router.get("/:idUser", cartcontrollers.userCart);

//======POST======//
router.post("/newCart", cartcontrollers.createdCart);

//======UPDATE======//
router.put("/updateCart/:idCart", cartcontrollers.updateCart);

//======DELETE======//
router.delete("/deleteCart/:idCart", cartcontrollers.deleteCart); //endpoint de la ruta de borrado de carrito

module.exports = router; //exportamos el archivo user.router mediante la siguiente linea.

const getNewGUID = require("../../helpers/helperString");

const cartsCtrl = {};

//models
const Cart = require('../../models/cart.model');

//========= ALL CARTS =========
cartsCtrl.allCarts = async (req,  res) => {
    const carts = await Cart.find()
    res.json(carts);
};

cartsCtrl.userCart = async (req,  res) => {
    
    const cart= await Cart.find()
    .where({ user: req.params.idUser })//donde usuario sea igual al id de usuario que me han pasado por el carrito
    res.json(cart);
};


//EXPORTACION
module.exports = cartsCtrl;
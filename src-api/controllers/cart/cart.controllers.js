const getNewGUID = require("../../helpers/helperString");//guardamos en la variable getNewGUID el contenido del archivo helperString

const cartsCtrl = {};

//MODELOS
const Cart = require('../../models/cart.model');//guardamos en la variable Cart el contenido del modelo de carrito

//LOGICA

//========= ALL CARTS =========
cartsCtrl.allCarts = async (req,  res) => {//funcion usada para traenos todos los carritos de compra
    const carts = await Cart.find()
    res.json(carts);
};


//========= USE CART =========
cartsCtrl.userCart = async (req,  res) => {//función para el carro que esta usando el usuario en ese momento
    const cart= await Cart.find()
    .where({ user: req.params.idUser })//donde usuario sea igual al id de usuario que me han pasado por el carrito
    res.json(cart);
};

//========= DELETE CART =========
cartsCtrl.deleteCart = async (req,  res) => {//función para el carro que esta usando el usuario en ese momento
    const cart= await Cart.find()
    .where({ user: req.params.idUser })//donde usuario sea igual al id de usuario que me han pasado por el carrito
    res.json(cart);
};



//EXPORTACION
module.exports = cartsCtrl;//exportamos la lógica de carrito
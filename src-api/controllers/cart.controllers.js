const getNewGUID = require("../helpers/helperString");//guardamos en la variable getNewGUID el contenido del archivo helperString

const cartsCtrl = {};

//MODELOS
const Cart = require('../models/cart.model');//guardamos en la variable Cart el contenido del modelo de carrito

//LOGICA

//========= ALL CARTS =========
cartsCtrl.allCarts = async (req,  res) => {//funcion usada para traenos todos los carritos de compra
    const carts = await Cart.find()
    res.json(carts);
};

//============USE CART============//
cartsCtrl.userCart = async (req,  res) => {//función para el carro que esta usando el usuario en ese momento
    const idUser = (req.params.idUser);
    //res.json(idUser);
    const cart= await Cart.find()
    .populate("user")//indicamos que vaya a user con la funcion populate.
    .where({ _id: idUser })//donde usuario sea igual al id de usuario que me han pasado por el carrito
    res.json(cart);
};

//===============POST==============//
cartsCtrl.createdCart = async (req, res) => {
    const newCart = new Cart(req.body);
    newCart._id = getNewGUID();
    await newCart.save();//el await indica que hasta que no se guarde el nuevo carro no pasamos a la linea siguiente. Indicamos que toda la informacion de newCart la guarde en la db.
    res.json(newCart);
}

//============UPDATE=============//
cartsCtrl.updateCart = async (req, res) => {
    const idCart = (req.params.idCart);
    const updateCart = (req.body);
    const cart = await Cart.findByIdAndUpdate(idCart, updateCart);
}

//========= DELETE CART =========
cartsCtrl.deleteCart = async (req,  res) => {//función para el carro que esta usando el usuario en ese momento
    const cart= await Cart.find()
    .where({ user: req.params.idUser })//donde usuario sea igual al id de usuario que me han pasado por el carrito
    res.json(cart);
};

//EXPORTACION
module.exports = cartsCtrl;//exportamos la lógica de carrito
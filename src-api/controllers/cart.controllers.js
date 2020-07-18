const getNewGUID = require("../helpers/helperString");//guardamos en la variable getNewGUID el contenido del archivo helperString

const cartsCtrl = {};

//MODELOS
const Cart = require('../models/cart.model');//guardamos en la variable Cart el contenido del modelo de carrito


//LOGICA

//======ALL CARTS======//
cartsCtrl.allCarts = async (req,  res) => {//funcion usada para traenos todos los carritos de compra
    const carts = await Cart.find()
    res.json(carts);
};

//======USE CART======//
cartsCtrl.userCart = async (req,  res) => {//función para el carro que esta usando el usuario en ese momento
    const idUser = (req.params.idUser);
    //res.json(idUser);
    const cart= await Cart.find()
    .populate("user")//indicamos que vaya a user con la funcion populate.
    .where({ _id: idUser })//donde usuario sea igual al id de usuario que me han pasado por el carrito
    res.json(cart);
};

//============POST CART=============//
cartsCtrl.createdCart = async (req, res) => {
    const newCart = new Cart(req.body);
    newCart._id = getNewGUID();
    await newCart.save();//el await indica que hasta que no se guarde el nuevo carro no pasamos a la linea siguiente. Indicamos que toda la informacion de newCart la guarde en la db.
    res.json(newCart);
}

//============UPDATE CART=============//
cartsCtrl.updateCart = async (req, res) => {//funcion para actualizar el carrito de compra por si se quiere añadir mas cantidad de un producto en concreto
    const idCart = (req.params.idCart);//capturamos el id del carrito en uso
    const updateCart = (req.body);//cojemos del body los datos actualizados
    const cart = await Cart.findByIdAndUpdate(idCart, updateCart);//actualizamos el carrito
}

//=========DELETE CART=========//
cartsCtrl.deleteCart = async (req,  res) => {//funcion para borrar carrito
    const idCart = (req.params.idCart);//capturamos el id del carrito que queremos borrar
    await Cart.findByIdAndDelete(idCart);//encontramos el id del carrito y lo borramos
    res.json("delete cart is completed");//mensaje para el usuario
};

//======EXPORTACION======//
module.exports = cartsCtrl;//exportamos la lógica de carrito
const getGUID = require ("../helpers/helperString");
const cartCtrl = { };
const Cart = require("../models/cart.model");

cartCtrl.allCart = async (req,res) => {
    const cart = await Cart.find()
    res.json(carts);
};

module.exports = (cartCtrl.allCart);
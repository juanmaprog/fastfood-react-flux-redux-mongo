const getNewGUID = require("../../helpers/helperString");

const productsCtrl = {};

//MODELOS
const Product = require('../../models/product.model');

//LOGICA

//========= ALL PRODUCTS =========
productsCtrl.allProducts = async (req,  res) => {//funcion usada para traenos todos los carritos de compra
    const products = await Product.find()
    res.json(products);
};

//EXPORTACION
module.exports = productsCtrl;

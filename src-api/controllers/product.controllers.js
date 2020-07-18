const getNewGUID = require("../helpers/helperString");

const productsCtrl = {};

//MODELOS
const Product = require('../models/product.model');

//LOGICA

//========= ALL PRODUCTS =========//
productsCtrl.allProducts = async (req,  res) => {//funcion usada para traenos todos los carritos de compra
    const products = await Product.find()
    .where ({deleted: false});
    res.json(products);
};

//============POST PRODUCT=============//
productsCtrl.createdProduct = async (req, res) => {//funcion para crear un nuevo producto
    const newProduct = new Product(req.body);//pasamos a la constante newProduct el nuevo producto que pasamos por el body
    newProduct._id = getNewGUID();//generamos un id aleatorio con la funcion getNewGUID
    await newProduct.save();// espoeramos a que el producto se salve
    res.json(newProduct);//devolvemos la respuesta del nuevo producto que hemos creado
}

//============UPDATE PRODUCT=============//
productsCtrl.updateProduct = async (req, res) => {// actualizar producto
    const idProduct = (req.params.idProduct);//buscamos el id que le hemos pasado por parametro
    const updateProduct = (req.body);// le pasamos a updateProduct los datos que le pasamos por el body al nuevo producto
    await Product.findByIdAndUpdate(idProduct, updateProduct);//encontramos y actualizamos el producto pasandole los parametros
    const product = await Product.findById(idProduct);//encontramos ese producto por su id 
    res.json(product);//devolvemos la respuesta de ese producto
}

//=========DELETE CART=========//
productsCtrl.deleteProduct = async (req,  res) => {//funcion para borrar carrito
    const idProduct = (req.params.idProduct);//capturamos el id del carrito que queremos borrar
    const product = await Product.findById(idProduct);//encontramos productos por su id y los guardamos en la constante product
    product.deleted = true;// le decimos que producto tenga la propiedad deleted en verdaderp
    await Product.findByIdAndUpdate(idProduct, product);//actualizamos el producto
    res.json("product deleted correctly");//mensaje para el usuario
};
//EXPORTACION
module.exports = productsCtrl;

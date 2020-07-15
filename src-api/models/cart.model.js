const { Schema, model } = require("mongoose");//requerimos moongose

const CartSchema = new Schema({//creamos la constante cartschema para guardar los datos internos como plantilla para crear el carrito de compra.
  _id: String,//id unico del carrito de compra.
  lineNumber: { type: Number },//Número de líneas ordenadas de los productos en el carrito.
  product: { type: Schema.Types.ObjectId, ref: "Product" },//productos que lleva el carrito individualmente enlazando con el modelo de producto de a uno.
  quantity: { type: Number, default: 1 },//cantidad de productos del carrito con un minimo de uno para que funcione.
  price: { type: Number },//precio de los productos del carrito
  total: { type: Number },//precio total de los productos del carrito con impuestos y demas tasas.
  user: { type: Schema.Types.ObjectId, ref: "User" }, //nos traemos todos los datos del usuario.
  createdAt: { type: Date, default: new Date() }, //nos trae la fecha del momento del registro.
  description: { type: String },//descripción de lo ocurrido en la entrada y salida de usuarios
});

module.exports = model("Cart", CartSchema);//exportamos el modelo de carrito.
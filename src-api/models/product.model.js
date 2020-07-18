const { Schema, model } = require("mongoose"); //requerimos a moongose.

const ProductSchema = new Schema({
  //creamos la constante productschema para guardar los datos internos como plantilla para crear productos.
  _id: String, //id identificativo del producto.
  name: { type: String, required: true }, //nombre del producto con la funcionalidad de que sea requerido
  description: { type: String, required: true }, //descripción de lo ocurrido en la entrada y salida de usuarios
  quantityStock: { type: Number }, //cantidad de productos en stock
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }], //ingredientes que lleva cada producto y que en laza con el modelo de ingredientes de a muchos por el uso del array.
  price: { type: Number }, //precio del producto
  cost: { type: Number }, //coste del producto para la empresa
  minimumStock: { type: Number }, //stock minimo que podemos tener para seguir funcionando correctamente
  createdAt: { type: Date, default: new Date() }, //nos trae la fecha del momento del registro.
  actived: { type: Boolean, default: true },
  deleted: { type: Boolean, default: false }, //buena practica poner falso aunque los booleanos por defecto siempre son falsos
});

module.exports = model("Product", ProductSchema); //exportamos el modelo de carrito

const { Schema, model } = require("mongoose"); //

const ProductSchema = new Schema({
  _id: String,
  name: { type: String, required: true },
  description: { type: String, required: true }, //descripción de lo ocurrido en la entrada y salida de usuarios
  quantityStock: { type: Number },
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
  price: { type: Number },
  createdAt: { type: Date, default: new Date() }, //nos trae la fecha del momento del registro.
});

module.exports = model("Cart", ProductSchema); //exportamos el modelo de carrito

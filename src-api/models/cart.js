const { Schema, model } = require("mongoose");//

const CartSchema = new Schema({
  _id: String,
  lineNumber: { type: Number },
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, default: 1 },
  price: { type: Number },
  total: { type: Number },
  user: { type: Schema.Types.ObjectId, ref: "User" }, //nos traemos todos los datos del usuario.
  createdAt: { type: Date, default: new Date() }, //nos trae la fecha del momento del registro.
  description: { type: String },//descripción de lo ocurrido en la entrada y salida de usuarios
});

module.exports = model("Cart", CartSchema);//exportamos el modelo de carrito

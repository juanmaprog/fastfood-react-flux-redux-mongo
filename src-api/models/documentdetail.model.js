const { Schema, model } = require("mongoose"); //importamos moogose para gestionar la base de datos

const DocumentDetailSchema = new Schema({
  //creamos la constante userschema para guardar los datos internos como plantilla para creación de documentos de pedidos
  //los datos a continuacion son un molde para generar la informacion de cada documento de pedido.
  lineNumber: { type: Number },
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, default: 1 },
  price: { type: Number },
  total: { type: Number },
  document: { type: Schema.Types.ObjectId, ref: "Document" },
});

module.exports = model("DocumentDetails", DocumentDetailSchema); //exportamos todo el modelo de usuario

const { Schema, model } = require("mongoose"); //importamos moogose para gestionar la base de datos

const DocumentDetailSchema = new Schema({//creamos la constante documentdetailschema para guardar los datos internos como plantilla para creación de los detalles de documentos de pedidos.
  
  //los datos a continuacion son un molde para generar la informacion de cada documento de pedido.
  lineNumber: { type: Number },//Número de linea de los detalles en cada documento ordenados de primero a ultimo segun su orden de pedido.
  product: { type: Schema.Types.ObjectId, ref: "Product" },//el porducto solicitado por el cliente referenciando al modelo producto de a uno que se eincluye en la lista de detalles de documentos
  quantity: { type: Number, default: 1 },//cantidad de detalles que tiene que tener cada documento con un minnimo de uno.
  price: { type: Number },//precio de cada documento segun los detalles que tenga dentro
  total: { type: Number },//el total de todos los detalles que se incluyen en el documento.
  document: { type: Schema.Types.ObjectId, ref: "Document" },//enlazamos con el modelo de documento de a uno ya que los detalles solo pueden estar en un documento.
});

module.exports = model("DocumentDetails", DocumentDetailSchema); //exportamos todo el modelo de usuario

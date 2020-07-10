const { Schema, model } = require("mongoose"); //importamos moogose para gestionar la base de datos

const DocumentSchema = new Schema({
  //creamos la constante userschema para guardar los datos internos como plantilla para creación de documentos de pedidos
  //los datos a continuacion son un molde para generar la informacion de cada documento de pedido.
  createdAt: { type: Date, default: new Date() }, //introducimos la fecha en la que se ha creado y aunque no se ponga la fecha se introduce automaticamente por la funcion default
  user: { type: Schema.Types.ObjectId, ref: "User" }, //con esta sentencia referenciamos al modelo del usuario y al no ser un array decimos que es una relacion de a uno
  paymentMethod: { type: String },
  documentDetails: [{ type: Schema.Types.ObjectId, ref: "DocumentDetail" }], //con esta sentencia referenciamos a los detalles del documento y al ser un array le decimos que es una relación de a muchos
  addresses: [{ type: String }], //es un array porque puden haber varias direccion por el mismo usuario
  phones: [{ type: String }], //es un array porque el usuario puede tener varios telefonos
  typeDocument: { type: String }, //estos seras del tipo AL = albarán, PE= pedido y FA = factura
  delivered: { type: Boolean }, //tipo buleano para saber si el pedido ha sido entregado
  deliveredDate: { type: Date }, //para saber la fecha de entrega del producto
});

module.exports = model("Document", DocumentSchema); //exportamos todo el modelo de usuario

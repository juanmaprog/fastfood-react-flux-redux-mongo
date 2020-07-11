const { Schema, model } = require("mongoose");//requerimos moongose

const FamilySchema = new Schema({//creamos la constante familyschema para guardar los datos internos como plantilla para crear las familias de alimentos.
  _id: String,//creamos un id unico para cada familia
  idFamily: { type: Schema.Types.DocumentId, ref: "Family" },//en esta funcion refenciamos que idFamily entre en la tabla de familia.
  name: { type: String, required: true },//nombre de la familia de alimentos
  products: [{ type: Schema.Types.DocumentId, ref: "Product" }],//productos que entran dentro de cada familia enlazando con el modelo de productos en forma de a muchos
});

module.exports = model("Family", FamilySchema);//exportamos el modelo de familias.

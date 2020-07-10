const { Schema, model } = require("mongoose");

const FamilySchema = new Schema({
  _id: String,
  idFamily: { type: Schema.Types.DocumentId, ref: "Family" },//en esta funcion refenciamos que idFamily entre en la tabla de familia.
  name: { type: String, required: true },
  products: [{ type: Schema.Types.DocumentId, ref: "Product" }],
});

module.exports = model("Family", FamilySchema);

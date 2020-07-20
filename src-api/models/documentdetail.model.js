const { Schema, model } = require("mongoose");

const DocumentDetails = new Schema({
  _id: String,
  lineNumber: { type: Number },
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, default: 1 },
  price: { type: Number },
  total: { type: Number },
  document: { type: Schema.Types.ObjectId, ref: "Document" },
});

module.exports = model("DocumentDetails", DocumentDetails);

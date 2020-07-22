const { Schema, model } = require("mongoose");

const Document = new Schema({
  // _id: String,
  createdAt: { type: Date, default: new Date() },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  paymentMethod: { type: String },
  documentDetails: [{ type: Schema.Types.ObjectId, ref: "DocumentDetails" }],
  addresses: [{ type: String }],
  phones: [{ type: String }],
  typeDocument: { type: String },
  delivered: { type: Boolean, default: false },
  deliveredDate: { type: Date },
});

module.exports = model("Document", Document);

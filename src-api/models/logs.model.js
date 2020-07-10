const { Schema, model } = require("mongoose");

const LogsSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" }, //nos traemos todos los datos del usuario.
  createdAt: { type: Date, default: new Date() }, //nos trae la fecha del momento del registro.
  description: { type: String },
});

module.exports = model("Logs", LogsSchema);

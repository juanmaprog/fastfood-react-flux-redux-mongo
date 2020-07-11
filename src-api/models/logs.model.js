const { Schema, model } = require("mongoose");//requerimos a moongose.

const LogsSchema = new Schema({//creamos la constante logsschema para guardar los datos internos como plantilla para crear logins.
  user: { type: Schema.Types.ObjectId, ref: "User" }, //nos traemos todos los datos del usuario de la plantilla de usuarios mediante el enlaza de a uno.
  createdAt: { type: Date, default: new Date() }, //nos trae la fecha del momento del registro.
  description: { type: String },//descripción de lo ocurrido en la entrada y salida de usuarios
});

module.exports = model("Logs", LogsSchema);//exportamos el archivo logs.

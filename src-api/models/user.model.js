const { Schema, model } = require("mongoose"); //importamos moogose para gestionar la base de datos
const bcrypt = require("bcryptjs"); //requerimos libreria bcryptjs para la encriptación de contraseñas

<<<<<<< HEAD
const UserSchema = new Schema({
  //creamos la constante userschema para guardar los datos internos como plantilla para crear usuarios
  //los datos a continuacion son un molde para generar la informacion de cada usuario.
  _id: String, //forzamos el id para que mongo no lo coja automaticamente
  name: { type: String, required: true }, //registramos el nombre en tipo string siendo obligatorio
  email: { type: String, unique: true, required: true }, //registramos email y obligamos que sea obligatorio y que sea unico en la base de datos
  password: { type: String, required: true, select: false }, //forzamos a que el password no se traiga on el resto de la informacion con el parametro select
  token: { type: String, unique: true },
  addresses: [{ type: String }], //es un array porque puden haber varias direccion por el mismo usuario
  phones: [{ type: String }], //es un array porque el usuario puede tener varios telefonos
  newlaters: { type: Boolean }, //suscripcion al noticiero de la web
  billcard: [{ type: String }], //array porque se pueden tener varias tarjetas y string porque tambien tiene letras
  createdBy: String, //forzamos para saber quien a creado el dato de documento
  createdAt: { type: Date, default: new Date() }, //introducimos la fecha en la que se ha creado y aunque no se ponga la fecha se introduce automaticamente por la funcion default
  active: { type: Boolean, default: true }, //el usuario esta activo por defecto asi sera
  deleted: { type: Boolean, default: false }, //borrado usuario lo ponemos en false para que cada usuario introducido no este borrado
  documents: [{ type: Schema.Types.DocumentId, ref: "Document" }], //nos traemos las facturas del usuario.
});
=======
const UserSchema = new Schema({//creamos la constante userschema para guardar los datos internos como plantilla para crear usuarios
    //los datos a continuacion son un molde para generar la informacion de cada usuario.
  _id: String,//forzamos el id para que mongo no lo coja automaticamente
  name: { type: String, required: true },//registramos el nombre en tipo string siendo obligatorio
  email: { type: String, unique: true, required: true },//registramos email y obligamos que sea obligatorio y que sea unico en la base de datos
  password: { type: String, required: true, select: false },//forzamos a que el password no se traiga on el resto de la informacion con el parametro select
  token: { type:String, unique:true },
  addresses: [{ type: String }],//es un array porque puden haber varias direccion por el mismo usuario
  phones: [{type: String}],//es un array porque el usuario puede tener varios telefonos
  newlaters: {type: Boolean},//suscripcion al noticiero de la web
  billcard: [{type: String}],//array porque se pueden tener varias tarjetas y string porque tambien tiene letras
  createdBy: String,//forzamos para saber quien a creado el dato de documento
  createdAt: { type: Date, default: new Date() },//introducimos la fecha en la que se ha creado y aunque no se ponga la fecha se introduce automaticamente por la funcion default
  active: { type: Boolean, default: true },//el usuario esta activo por defecto asi sera
  deleted: { type: Boolean, default: false },//borrado usuario lo ponemos en false para que cada usuario introducido no este borrado
})
>>>>>>> 2e5a176f2b2bbd20d54dc43d6f80eccbcaf253e0

//Funcion para encriptar la contrseña de usuario
UserSchema.pre("save", function () {
  //antes de guardar el modelo de usuario generamos la siguiente funcion
  let user = this; //el usuario que tenemos en este momento
  if (!user.isModified("password")) return next(); //si no se ha modificado el password seguimos con la funcion
  bcrypt.genSalt(10, (err, salt) => {
    //encriptame este password diez veces que es el punto entre seguridad y eficiencia
    if (err) return next(err); //nos devuelve un error
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      //nos pide cuatro parametros de los cuales nos devolvera un erro o un hash en una promesa
      if (err) return next(err); //si error no es nulo retorna a error
      user.password = hash; //si el password de usuario es correcto que devuelva el hash
      next(); //en caso de que todo vaya bien vuelve a continuar haciendo todo lo que esta haciendo la logica
    });
  });
});

UserSchema.methods.matchPassword = async function (password) {
  //funcion que nos comprueba que el password que pasamos y el de la base de datos segun el usuario coincide
  return await bcrypt.compare(password, this.password); //comparamos dos cadenas poara ver si coinciden
};

module.exports = model("User", UserSchema); //exportamos todo el modelo de usuario

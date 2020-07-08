const getNewGUID = require("../../helpers/helperString");//importamos la función getNewGUID del archivo helpersString para poder usarlo en este documento y que a su vez sea mas limpio
const usersCtrl = {};//
// Models
const User = require("../../models/user.model");
//========= ALL USERS =========
usersCtrl.allUsers = async (req, res) => {//funcion para traerme a todos los usuarios
  const users = await User.find()//guardamos en la variable users los usuarios encontrados
  .where( {deleted: false })//mientras donde los usuarios no esten marcados como borrados declarando que borrados en falso
  .sort({ firstName: "asc" });//me los traes por su primer nombre de manera ascendete
  res.json(users);//en objetos json
  
};
usersCtrl.allUsersActives = async (req, res) => {
  const users = await User.find()
    .where({ active: true })
    .sort({ firstName: "asc" });//ordenamelo por el primer nombre de manera ascendente de los usuarios activos
  res.json(users);//retornamos todos los documentos de los usuarios
};
usersCtrl.allUsersInactives = async (req, res) => {
  const users = await User.find()
    .where({ active: false })
    .sort({ firstName: "asc" });//ordenamelo por el primer nombre de manera ascendente de los usuarios inactivos
  res.json(users);//retornamos todos los documentos de los usuarios
};
usersCtrl.allUsersDeleteds = async (req, res) => {//todos los usuarios que se dan de baja
  const users = await User.find()//traeme a todos los usuarios
  .where({ deleted: true })//donde dados de baja sea verdad
  .sort({ firstName: "asc" });//ordenamelos por nombre ascendente
  res.json(users);//retornamos todos los documentos de los usuarios
};
usersCtrl.userById = async (req, res) => {//funcion busqueda por id de usuario
    //localhost:3000/api/users/10-----endpoint de los parametros de la linea de abajo
  let userId = req.params.id;//cuando el usuario escriba su id lo guardaremos en la variable userId
  await User.findById(userId, (err, user) => {//busque al usuario por su id
    if (err) return res.status(500).send("Error al realizar la petición");//si retrona un erro pintame el mensaje
    if (!user)//si el usuario es undefined o null el usuario no existe
      return res.status(404).send({ message: "El usuario no existe." });//devolvemos este mensaje
    res.status(200).send(user);//en caso de que salgo bien status 200 que es ok y seguidamente el usuario
  });
};
//========= INSERT USER =========
usersCtrl.createNewUser = async (req, res) => {//función para crear un nuevo usuario
  const errors = [];//
  if (errors.length > 0) {//si los errores son mas de cero, es decir si hay errores dentro de todos los usuarios dentro del array
    /* res.status(400).send({}) {//
      errors,
      title,
      description,
    }); */
  } else {//si es lo contrario de la afirmacion anterios, es decir no tenemos errores
    const newUser = new User(req.body);//meteme en la variable newUser el usuario que se introduce en el body
    newUser._id = getNewGUID();//la id del nuevo usuario es generado mediante la funcion getNewGUID por uno viable para la base de datos para mongo
    await newUser.save();//le decimos a moongose que guarde el nuevo usuario en la base de datos mediante la funcion save
    res.json(newUser);//si todo he ido bien traeme el nuevo usuario por objeto json
  }
};
//========= UPDATE USER =========
usersCtrl.updateUser = async (req, res) => {//funcion para actualizar usuarios
    //localhost:3000/api/users/updateuser/id--------el endpoint para actualizar usuario
  let userId = req.params.id;//guardar en la variable userIUd el dato pasado por el cliente, el id
  let dataUpdate = req.body;//guardomos en la funcion dataupdate los datos pasados por el usuario en el body
  const user = await User.findByIdAndUpdate(userId, dataUpdate);//funcion para encontrar por id y en caso de que este actualizala, si no esta no lo hará
  res.json(user);//lo devolvemos mediante un objeto json
};
//========= DELETE USER =========
usersCtrl.deleteUser = async (req, res) => {//funcion para borrar el usuario
    //localhost:3000/api/users/deleteuser/id-----------endpoint para borrar el usuario
  let userId = req.params.id;//se guarda el parametro del id que ha pasado el usuario en la variable userid
  let userUpdate = await User.findById(userId);//encuantra el usuario por id que introduce el cliente y guardalo en la variable userupdate
  userUpdate.active = false;//si el usuario buscado por id en la varible anterior es igual a no activo
  userUpdate.deleted = true;//asigno true al campo deleted por lo cual se borrara el usuario
  const user = await User.findByIdAndUpdate(userId, userUpdate);//guardamos en la funcion user el usuario encontrado por id que nos pasa el cliente y lo actualizamos con sus datos tambien pasados por este
  res.json(user);//lo devolvemos por objeto json
};
module.exports = usersCtrl;//exportamos todos las datos de este archivo
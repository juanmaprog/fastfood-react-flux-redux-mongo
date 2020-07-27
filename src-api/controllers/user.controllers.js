// const getNewGUID = require("../helperString");
const usersCtrl = {};
const User = require("../models/user.model");

//========= ALL USERS =========
usersCtrl.allUsers = async (req, res) => {
  const users = await User.find()
    .where({ deleted: false })
    .sort({ firstName: "asc" });
  res.json(users);
};

usersCtrl.allUsersActives = async (req, res) => {
  const users = await User.find()
    .where({ active: true })
    .sort({ firstName: "asc" });
  res.json(users);
};

usersCtrl.allUsersInactives = async (req, res) => {
  const users = await User.find()
    .where({ active: false })
    .sort({ firstName: "asc" });
  res.json(users);
};

usersCtrl.allUsersDeleteds = async (req, res) => {
  const users = await User.find()
    .where({ deleted: true })
    .sort({ firstName: "asc" });
  res.json(users);
};

usersCtrl.userById = async (req, res) => {
  let userId = req.params.id;
  await User.findById(userId, (err, user) => {
    if (err) return res.status(500).send("Error al realizar la petición");
    if (!user)
      return res.status(404).send({ message: "El usuario no existe." });
    res.status(200).send(user);
  });
};

//========= INSERT USER =========
usersCtrl.createNewUser = async (req, res) => {
  const errors = []; //
  if (errors.length > 0) {
    /* res.status(400).send({}) {
      errors,
      title,
      description,
    }); */
  } else {
    const newUser = new User(req.body);
    // newUser._id = getNewGUID();
    await newUser.save();
    res.json(newUser);
  }
};

//========= UPDATE USER =========
usersCtrl.updateUser = async (req, res) => {
  let userId = req.params.id;
  let dataUpdate = req.body;
  const user = await User.findByIdAndUpdate(userId, dataUpdate);
  res.json(user);
};

//========= DELETE USER =========
usersCtrl.deleteUser = async (req, res) => {
  let userId = req.params.id;
  let userUpdate = await User.findById(userId);
  userUpdate.active = false;
  userUpdate.deleted = true;
  const user = await User.findByIdAndUpdate(userId, userUpdate);
  res.json(user);
};

module.exports = usersCtrl;

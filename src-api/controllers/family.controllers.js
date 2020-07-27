// const getNewGUID = require("../helpers/helperString");
const familyCtrl = {};
const Family = require("../models/family.model");

//======ALL FAMILIES======//
familyCtrl.allFamily = async (req, res) => {
  const family = await Family.find();
  res.json(family);
};

//======FAMILY CART======//
familyCtrl.getFamily = async (req, res) => {
  const idFamily = req.params.id;
  const family = await Family.findById(idFamily);
  res.json(family);
};

//======POST======//
familyCtrl.postFamily = async (req, res) => {
  const family = new Family(req.body);
  // family._id = getNewGUID();
  await family.save();
  res.json(family);
};

//======UPDATE FAMILY======//
familyCtrl.updateFamily = async (req, res) => {
  const idFamily = (req.params.idFamily);
  const updateFamily = (req.body);
  await Family.findByIdAndUpdate(idFamily, updateFamily);
  const family = await Family.findById(idFamily);
  res.json(family);
};

//======DELETE FAMILY======//
familyCtrl.deleteFamily = async (req, res) => {
  const idFamily = (req.params.idFamily);
  const updateFamily = await Family.findById(idFamily);
  updateFamily.deleted = true;
  await Family.findByIdAndUpdate(idFamily, updateFamily);
  res.json("Delete family is completed");
};

module.exports = familyCtrl;

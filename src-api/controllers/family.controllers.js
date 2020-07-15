const getNewGUID = require("../helpers/helperString");
const familyCtrl = {};
const Family = require("../models/family.model");

familyCtrl.allFamily = async (req, res) => {
    const family = await Family.find()
    res.json(family);
}

module.exports = (familyCtrl.allFamily);
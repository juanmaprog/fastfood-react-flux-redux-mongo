const getNewGUID = require("../helpers/helperString");
const ingredCtrl = {};
const Ingredients = require("../models/ingredients.model");

ingredCtrl.allIngred = async (req, res) => {
    const ingredients = await Ingredients.find()
    res.json(ingredients);
}

module.exports = (ingredCtrl.allIngred);
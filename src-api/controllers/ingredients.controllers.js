const getNewGUID = require("../helpers/helperString");
const ingredientCtrl = {};

//MODELOS
const Ingredient = require("../models/ingredient.model");


//LOGICA

//========= ALL INGREDIENTS =========//
ingredientCtrl.allIngredients = async (req, res) => {
    const ingredients = await Ingredients.find()
    res.json(ingredients);
}

//============POST INGREDIENTS=============//
ingredientCtrl.createdIngredient = async (req, res) => {
    const newIngredient = new Ingredient(req.body);
    newIngredient._id = getNewGUID();
    await newIngredient.save();
    res.json(newIngredient);
}

//============UPDATE INGREDIENTS=============//
ingredientCtrl.updateIngredient = async (req, res) => {
    const idIngredient = (req.params.idIngredient);
    const updateIngredient = (req.body);
    await Ingredient.findByIdAndUpdate(idIngredient, updateIngredient);
    const ingredient = await Ingredient.findById(idIngredient);
    res.json(ingredient);
}
//=========DELETE INGREDIENTS=========//
ingredientCtrl.deleteIngredient = async (req, res) => {
    const idIngredient = (req.params.idIngredient);
    const ingredient = await Ingredient.findById(idIngredient);
    ingredient.deleted = true;
    await Ingredient.findByIdAndUpdate(idIngredient, ingredient);
    res.json("ingredient deleted correctly");

}
//EXPORTACION
module.exports = ingredientCtrl;
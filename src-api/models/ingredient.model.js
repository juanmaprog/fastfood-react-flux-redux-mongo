const { Schema, model } = require("mongoose"); //requerimos moongose

const IngredientSchema = new Schema({
  _id: String,
  name: { type: String, required: true },
  weight: { type: Number }, //unidad de medida gramos.
  energyvalue: { type: Number }, //unidad medida kcal.

  //Unidad de medida gramos.
  proteins: { type: Number },
  carbohydrates: { type: Number },
  sugar: { type: Number },
  addedsugar: { type: Number },
  greases: { type: Number },
  Monounsaturatedfats: { type: Number },
  Polyunsaturatedfats: { type: Number },
  Saturatedfat: { type: Number },
  Transhydrogenatedfat: { type: Number },
  Naturaltransfat: { type: Number },
  Transfat: { type: Number },
  Fiber: { type: Number },

  //Unidad de medida miligramos.
  Sodium: { type: Number },
  Salt: { type: Number },
  Saltadded: { type: Number },

  createdAt: { type: Date, default: new Date() }, 
  actived: { type: Boolean, default: true },
  deleted: { type: Boolean, default: false },
});

module.exports = model("Ingredient", IngredientSchema);

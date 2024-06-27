import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
    // It can take multiple food with it being in an []
    // name: [{type:String}],
    // this is a guard not to repeat values unique true and required for the field not to be skiped
    name: {type:String, unique:true, required:true},

    ingredients:[{type:String}]
});

export const RecipeModel = model('Recipe', recipeSchema);
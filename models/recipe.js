import { Schema, model, Types } from "mongoose";
// import normalize from "normalize-mongoose"
import mongoose from 'mongoose'
import {toJSON} from '@reis/mongoose-to-json'
const recipeSchema = new Schema(
  {
    // It can take multiple food with it being in an []
    // name: [{type:String}],
    // this is a guard not to repeat values unique true and required for the field not to be skiped
    name: { type: String, unique: true, required: true },
    // Adding Types.ObjectId is used to reference to the categoryID with the reference model from the category model 'Category'
    categoryId: { type: Types.ObjectId, ref:'Category', required:true },
    desciption: { type: String, required: true },
    ingredients: [{ type: String }],
    image: { type: String, required:true },
    favourite:{type:Boolean, default: false}

  },
  {
    // This is done to introduce some additional properties called Created At and Updated At(Used for Auditing)
    timestamps: true,
  }
);
recipeSchema.plugin(toJSON);

export const RecipeModel = model("Recipe", recipeSchema);

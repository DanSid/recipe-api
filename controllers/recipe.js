
import { RecipeModel } from "../models/recipe.js";

export const getRecipies = async(req,res,next)=>{
    try {
        // Getting all recipies from database
        const allRecipies = await RecipeModel.find();
        // Returning all recipies as response
        res.json(allRecipies)
    } catch (error) {
        next(error)
    }
}

// Post Recipe
export const postRecipe = async (req,res,next)=>{
    try {
            // Add recipe to database
         const newRecipe =  await RecipeModel.create(req.body)
            // Return Response
            res.json(newRecipe)
    } catch (error) {
        next(error)
    }
    }

    // Patch Recipe
    export const patchRecipe = (req, res)=>{
        res.json(`Recepies with ID ${req.params.id} Updated`)
    }

    // Delete Recipe
    export const deleteRecipe = async (req,res,next)=>{
   try {
    // We want to delete recipe by id
    const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
   
    // Return response
         res.json(deletedRecipe)
   } catch (error) {
    next(error)
   }
    }

    // Get Recipe
    export const getRecipe = (req,res)=>{
        res.json(`This is the ${req.params.id} single Recipies`)
    }
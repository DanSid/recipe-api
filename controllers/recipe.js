
import { RecipeModel } from "../models/recipe.js";

export const getRecipies = async (req, res, next) => {
    try {
        // Get query params
        const {limit, skip, search} = req.query;

        // Getting all recipies from database
        const allRecipies = await RecipeModel
        .find({name:search})
        .limit(limit)
        .skip(skip);
        // Returning all recipies as response
        res.json(allRecipies)
    } catch (error) {
        next(error)
    }
}

// Post Recipe
export const postRecipe = async (req, res, next) => {
    try {
        // Add recipe to database
        const newRecipe = await RecipeModel.create({
                 // spreadit
                 ...req.body,
                 image: req.file.filename
        })
        // Return Response
        res.json(newRecipe)
    } catch (error) {
        next(error)
    }
}



// Delete Recipe
export const deleteRecipe = async (req, res, next) => {
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
// export const getRecipe = (req, res) => {
//     res.json(`This is the ${req.params.id} single Recipies`)
// }
export const getRecipe = async (req, res, next) => {
    // res.json(`This is the ${req.params.id} single Recipies`)
    try {
        const getRec = await RecipeModel.findById(req.params.id)
        // return response
        res.json(getRec)
    } catch (error) {
        next(error)
    }
}



// Patch Recipe
// export const patchRecipe = (req, res)=>{
//     res.json(`Recepies with ID ${req.params.id} Updated`)
// }

// Patch Recipe for favourite
export const patchRecipe = async (req, res, next) => {
    try {
        // Update recipe by ID to any field of that specific ID
        const updateRecipe = await RecipeModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        // return response
        res.json(updateRecipe)
    } catch (error) {
        next(error);
    }
}



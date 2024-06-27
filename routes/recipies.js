import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";
import { deleteRecipe, getRecipe, getRecipies, patchRecipe, postRecipe } from "../controllers/recipe.js";
// Create a router
const recipiesRouter = Router();

// Define routes
recipiesRouter.get('/recipies', getRecipies);


recipiesRouter.post('/recipies',postRecipe);

recipiesRouter.patch('/recipies/:id',patchRecipe);

recipiesRouter.delete('/recipies/:id',deleteRecipe);

recipiesRouter.get('/recipies/:id',getRecipe);

// Export routers
export default recipiesRouter;
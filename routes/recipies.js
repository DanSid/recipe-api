import { Router } from "express";
import { deleteRecipe, getRecipe, getRecipies, patchRecipe, postRecipe } from "../controllers/recipe.js";
import { localUpload, remoteUpload } from "../middlewares/upload.js";
import { checkUserSession } from "../middlewares/auth.js";
// Create a router
const recipiesRouter = Router();


// Applying middleware
// recipiesRouter.use(checkUserSession)

// Define routes
recipiesRouter.get('/recipies', getRecipies);


recipiesRouter.post('/recipies',checkUserSession,remoteUpload.single('image'),postRecipe);

recipiesRouter.patch('/recipies/:id',checkUserSession,patchRecipe);

recipiesRouter.delete('/recipies/:id',deleteRecipe);

recipiesRouter.get('/recipies/:id',getRecipe);

// Export routers
export default recipiesRouter;
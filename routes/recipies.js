import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";
// Create a router
const recipiesRouter = Router();

// Define routes
// recipiesRouter.get('/recipies', (req,res)=>{
//     res.json('All recipies')
// });


recipiesRouter.post('/recipies',async (req,res)=>{
    // Add recipe to database
    await RecipeModel.create(req.body)
    // Return Response
    res.json('Recipe Added')
});

recipiesRouter.patch('/recipies/:id',(req, res)=>{
    res.json(`Recepies with ID ${req.params.id} Updated`)
});

recipiesRouter.delete('/recipies/:id',(req,res)=>{
    res.json(`Recepies with ID ${req.params.id} Deleted` )
});

recipiesRouter.get('/recipies/:id',(req,res)=>{
    res.json(`This is the ${req.params.id} single Recipies`)
})

// Export routers
export default recipiesRouter;
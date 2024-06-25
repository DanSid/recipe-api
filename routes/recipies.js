import { Router } from "express";

// Create a router
const recipiesRouter = Router();

// Define routes
recipiesRouter.get('/recipies', (req,res)=>{
    res.json('All recipies')
});


recipiesRouter.post('/recipies',(req,res)=>{
    res.json('Recipies added')
});

recipiesRouter.patch('/recipies/:id',(req, res)=>{
    res.json(`Recepies with ID ${req.params.id} Updated`)
});

recipiesRouter.delete('/recipies/:id',(req,res)=>{
    res.json(`Recepies with ID ${req.params.id} Deleted` )
});


// Export routers
export default recipiesRouter;
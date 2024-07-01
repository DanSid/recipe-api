import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category";


const categoryRouter = Router();

categoryRouter.get('/categories', getCategories);
categoryRouter.post('/categories', postCategory);

export default categoryRouter;


import { Router } from "express";
// import multer from "multer";
import { getCategories, postCategory } from "../controllers/category.js";
import { localUpload } from "../middlewares/upload.js";

// Create upload middleware
// const upload = multer({ dest: 'uploads' })


// create router
const categoryRouter = Router();


// define routes
categoryRouter.get('/categories', getCategories);
// categoryRouter.post('/categories',upload.single('image'), postCategory);
categoryRouter.post('/categories',localUpload.single('image'), postCategory);

// export router
export default categoryRouter;


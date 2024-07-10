import { Router } from "express";
// import multer from "multer";
import { getCategories, postCategory } from "../controllers/category.js";
import { localUpload, remoteUpload } from "../middlewares/upload.js";
import { checkUserSession } from "../middlewares/auth.js";
// Create upload middleware
// const upload = multer({ dest: 'uploads' })


// create router
const categoryRouter = Router();


// define routes
categoryRouter.get('/categories' ,getCategories);
// categoryRouter.post('/categories',upload.single('image'), postCategory);
categoryRouter.post('/categories',checkUserSession,remoteUpload.single('image'), postCategory);

// export router
export default categoryRouter;


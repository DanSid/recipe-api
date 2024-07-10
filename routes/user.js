import { Router } from "express";
import { register } from "../controllers/user.js";


// Create Router

const userRouter = Router();

userRouter.post('/register', register)


// Export router
export default userRouter;
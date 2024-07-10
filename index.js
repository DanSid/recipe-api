import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";
import expressOasGenerator from "express-oas-generator"
import recipiesRouter from "./routes/recipies.js";
import categoryRouter from "./routes/category.js";
import userRouter from "./routes/user.js";

//Connect to database
await mongoose.connect(process.env.MONGO_URL)

// Create Express App
const app = express();

expressOasGenerator.handleResponses(app,{
    alwaysServeDocs: true,
    tags: ['categories', 'recipes'],
    mongooseModels:mongoose.modelNames(),
});

// Apply Middlewares
app.use(express.json())
app.use(cors())
app.use(express.static('uploads'))
app.use(session({
    // The session_secret encrypts it that when you steal the password you cannot be able to use it
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));


// Use routes from different places
app.use(userRouter);
app.use(recipiesRouter);
app.use(categoryRouter);


expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs'));

// Listen for incoming requests
const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`App listening on port ${port}`);
})

// Password for user: eGmmtWpo3ML5XU3a
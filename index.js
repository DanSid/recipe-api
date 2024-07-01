import express from "express";
import mongoose from "mongoose";
import expressOasGenerator from "express-oas-generator"
import recipiesRouter from "./routes/recipies.js";
import categoryRouter from "./routes/category.js";

//Connect to database
await mongoose.connect(process.env.MONGO_URL)

// Create Express App
const app = express();

expressOasGenerator.handleResponses(app,{
    tags: ['categories', 'recipes'],
    mongooseModels:mongoose.modelNames(),
});

// Apply Middlewares
app.use(express.json())

// Define routes
// app.get('/', (req,res)=>{
//     res.json('Welcome to the home page');
// });

app.post('/login',(req,res)=>{
    res.json('Your login was successful')
});

app.patch('/aboutus',(req,res)=>{
    res.json('Your document is successfully Updated')
})

app.delete('/contactus', (req,res)=>{
    res.json('Your page is deleted')
})


// Use routes from different places
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
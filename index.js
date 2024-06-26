import express from "express";
import recipiesRouter from "./routes/recipies.js";
import mongoose from "mongoose";


//Connect to database
await mongoose.connect(process.env.MONGO_URL)

// Create Express App
const app = express();

// Apply Middlewares
app.use(express.json())

// Define routes
app.get('/', (req,res)=>{
    res.json('Welcome to the home page');
});

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


// Listen for incoming requests
app.listen(3000, () =>{
    console.log('App listening on port 3000');
})

// Password for user: eGmmtWpo3ML5XU3a
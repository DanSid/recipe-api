import express from "express";


const apps = express();

apps.get('/recipies',(req,res)=>{
    res.json('Receipies is gotten')
})



apps.post('/recipies',(req,res)=>{
    res.json(`The information is ${req.params.id}`)
})


apps.listen(3000, ()=>{
    console.log('Information here port is working');
})
const express =require('express');
const route =express.Router();

route.get('/',async(req,res)=>{
    res.status(200).send("Hello Prajawl")
})

module.exports=route
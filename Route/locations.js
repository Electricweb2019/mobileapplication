const express=require('express')
const pool=require('../queries')
const route=express.Router();

route.get('/',async(req,res)=>{
    try {
        console.log("API hit");
        const locations = await pool.query('SELECT * FROM locations');
        console.log(locations);
        res.status(200).send(locations.rows);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving locations');
      }
})

module.exports=route
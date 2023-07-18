const express =require('express');
const route =express.Router();
const pool=require('../queries');
const bcrypt=require('bcrypt');

route.get('/', (req, res) => {
    pool.query('SELECT * FROM users', (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
  });
  
// posting a new user (Registering user)
route.post('/',async(req,res)=>{
    // console.log(req.body);
    // const hashedPassword= await bcrypt.hash(req.body.Password,10);
    // console.log(hashedPassword);
    const mysql="INSERT INTO Users(LoginId,FirstName,LastName,Email,Password,Contact_Number,Reg_Token)VALUES(?,?,?,?,?,?,?)"

    await pool.query(mysql,[req.body.LoginId,req.body.FirstName,req.body.LastName,req.body.Email,req.body.Password,req.body.Contact_Number,req.body.Reg_Token],(error,results)=>{
        if(error){
          console.log(error)
            res.status(404).send("Error in storing")
        }
        else{
            res.status(200).send("Inserted complete");
        }
    })
})
  

module.exports=route
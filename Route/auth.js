const express=require('express');
const route=express.Router();
const pool=require('../queries')
const bcrypt=require('bcrypt');
const JwtToken=require('../jwt');

route.post('/',async(req,res)=>{
            // console.log(req.body);
    const user=await pool.query('SELECT * FROM users WHERE email=$1 ',[req.body.email])

        // console.log(user.rows[0].loginid)
        // res.status(200).send(user)
        // console.log(user)
        //First checkin Email
        if(user.rows.length==0){
            console.log(user.rows.length)
            return res.status(400).send("Invalid Email or Password");
        }   
                //comparing hashedPassword;
                // const isValid=await bcrypt.compare(req.body.password,user.rows[0].password)
                console.log(isValid)
                if(!isValid){
                    res.status(400).send("Email or Password is incorrect");
                }
                else{
                    // const user_id=user.rows[0].loginid;
                    // const result=await JwtToken(user_id);
                    // console.log(result)
                    res.status(200).send(result)
                }
                    
                    
                

                //Email and password is vaild now genrate token
               
                
        
        
    });
    
    
    
    

module.exports=route
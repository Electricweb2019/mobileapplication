const express = require('express');

const app=express();


const user=require('./Route/user');
const test=require('./Route/test');
const auth =require('./Route/auth');
const locations=require('./Route/locations');

app.use(express.json());

app.use('/api/get',test);
app.use('/api/locations',locations);
app.use('/api/user',user);
app.use('/api/auth',auth);


const port =process.env.PORT ||3000;
app.listen(port,()=>{console.log(`Listening to port ${port}`)});

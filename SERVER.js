const express=require('express');
const app=express();
const db=require('./db');
require('dotenv').config();

const passport=require('./models/auth.js')
const person=require('./models/persons.js');

const port=process.env.PORT || 3000;

//Middleware function

const logRequest=(req,res,next)=>{
  console.log(`[${new Date().toLocaleString()} ]Resquest Made to :${req.originalUrl}`);
  next();
}

app.use(logRequest);
app.use(passport.initialize()); //use for authentication purpose

const localAuthMiddleware=passport.authenticate('local',{session:false});

app.get('/home',localAuthMiddleware, (req,res)=>{
  res.send('Welcome to Our Hotel');
});

//Import the router files
const personroutes=require('./routes/personroutes.js');
const menuRoutes=require('./routes/menuRoutes.js')

//use the router
app.use('/person',localAuthMiddleware,personroutes);//authentication is added to person data
app.use('/menu',menuRoutes); 


app.listen(port,()=>{
  console.log(`SERVER IS LISTENTNING at port: ${port}`);
});
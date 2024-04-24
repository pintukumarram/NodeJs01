const express=require('express');
const app=express();
const db=require('./db');
const passport=require('passport');
const localStretegy=require('passport-local').Strategy;
require('dotenv').config();


// const person=require('./models/persons.js');
// const menuItem=require('./models/menu.js');
// const Person=require('./models/persons.js')

// app.use(express.json());
const port=process.env.PORT || 3000;


//Middleware function

const logRequest=(req,res,next)=>{
  console.log(`[${new Date().toLocaleString()} ]Resquest Made to :${req.originalUrl}`);
  next();
}

passport.use( new localStretegy(async(username,password,done)=>{
  // Authentication logic here
  try{
console.log('Received credentials:',username,password);
const user= await Person.findOne(({username:username}));
if(!user)
  return done(null,false,{message:'Incorrect username.'});

  const isPasswordMatch=user.password===password ? true: false;
  if(isPasswordMatch){
    return done(null,user);
  }else{
    return done(null,false,{message:'Incorrect username.'})
  }

  }catch(err){
 return done(err);
  }
}))

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
app.use('/person',personroutes);
app.use('/menu',menuRoutes);



app.listen(port,()=>{
  console.log(`SERVER IS LISTENTNING at port: ${port}`);
});
const express=require('express');
const app=express();
const db=require('./db')

const person=require('./models/persons.js');
const menuItem=require('./models/menu.js');

app.use(express.json());



app.get('/Home',(req,res)=>{
  res.send('Welcome to Our Hotel');
});

//Import the router files
const personroutes=require('./routes/personroutes.js');
const menuRoutes=require('./routes/menuRoutes.js')

//use the router
app.use('/person',personroutes);
app.use('/menu',menuRoutes);
app.listen(3000,()=>{
  console.log('SERVER IS LISTENTNING on port:3000');
});
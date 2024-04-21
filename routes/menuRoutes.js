const express=require('express');
const router=express.Router();
const menuItem=require('./../models/menu.js');

router.post('/',async(req,res)=>{
  try{
const data= req.body
const menuItems=new menuItem(data);

const response=await menuItems.save();
console.log('Data saved');
res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
  }
})

router.get('/',async(req,res)=>{
  try{
const data=await menuItem.find();
console.log('Data is feteched for menu items');
res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
  }
})

//Taste type
router.get('/:tasteType',async(req,res)=>{
  try{
const tasteType=req.params.tasteType;
if(tasteType==='sweet' || tasteType==='spicy' ||tasteType==='sour'){
  const response=await menuItem.find({taste:tasteType});
  console.log('Response is feteched');
  res.status(200).json(response);
}else{
  console.log({Error: 'Invalid taste type.Please enter valid key'});
}

  }catch(err){
console.log(err);
res.status(500).json({erro:'Internal server error'});
  }
});


module.exports=router;
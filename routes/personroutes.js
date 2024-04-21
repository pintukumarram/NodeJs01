const express = require('express');
const router =express.Router();
const person=require('./../models/persons.js')


router.post('/', async (req,res)=>{

  try{
    const data=req.body
    const newPerson=new person(data);

    const response=await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
  }
  
catch(err){
  console.log(err);
  res.status(500).json({error:'Internal server error'});

}
});

router.get('/', async(req,res)=>{
  try{
    const data = await person.find();
    console.log('data fetched');
    res.status(200).json(data);

  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
  }

})

router.get('/:workType',async(req,res)=>{
  try{
    const workType=req.params.workType;
    if(workType==='chef' || workType==='manager' || workType==='waiter'){
      const response=await person.find({work:workType});
      console.log('Response is feteched');
      res.status(200).json(response);
    }else{
      res.status(404).json({error:'Invalid work type'});
    }

  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
  }
})

//PUT: is uded here to update data
router.put('/:id',async( req,res)=>{
  try{
const personId=req.params.id;
const updatePersonData=req.body;


const response=await person.findByIdAndUpdate(personId,updatePersonData,{
  new:true,
  runValidator:true,
 
})

if(!response){
  return res.status(404).json({error:'Person not found'});
}
console.log('Data updated')
res.status(200).json(response)

  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});


  }
})
//Delete: use to
router.delete('/:id',async(req,res)=>{
  try{
    const personId=req.params.id;
    const response=await person.findOneAndDelete(personId);
    if(!response){
      return res.status(404).json({error:'Person not found'});
    }
    console.log('Data delete');
    res.status(200).json({message:'Person deleted successfully'});
  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
  }
})
module.exports=router;


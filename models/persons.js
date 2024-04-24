const mongoose=require('mongoose');

const personSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    default:0
  },
  mobile:{
    type:String,
    required:true
  },
  email: {
    type: String,
    required: true,
    unique: true // Ensure uniqueness
},
work:{
  type:String,
  required:true
},
salary:{
type:Number,
required:true
},
username:{
  type:String,
  required:true
},
password:{
  type:String,
  required:true
}

});

//Create/Define model  person model
const Person=mongoose.model('person',personSchema);
module.exports=Person;
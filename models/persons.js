const mongoose=require('mongoose');

const bcrypt=require('bcrypt')
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
personSchema.pre('save',async function(next){
  const person=this;
  if(!person.isModified(password)) return next();
try{
//it done when we have to generate hash passpword
const salt =await bcrypt.genSalt(15);
//hass password

const hashPassword=await  bcrypt.hash(person.password,salt);
//Override the plain password with the hashed one
person.password=hashPassword;
next();
}catch(err){
return next(err);
}
})

 personSchema.methods.comparePassword=async function(candidatePassword){
try{
const isMatch=await bcrypt.compare(candidatePassword,this.password);
return isMatch;


}catch(err){
throw err;
}

}

//Create/Define model  person model
const Person=mongoose.model('person',personSchema);
module.exports=Person;
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
  required:"Owner",
},
salary:{
type:Number,
required:true
}
});

//Create/Define model  person model
const Person=mongoose.model('person',personSchema);


// Create a new person
// const newPerson = new Person({
//   name: 'John',
//   age: 30,
//   mobile: "6524254254",
//   email:"pkr@gmail.com",
//   work:"owner"
// });

// Save the person to the database
// newPerson.save()
//     .then(() => console.log('Person saved to database'))
//     .catch(err => console.error('Error saving person to database:', err));

module.exports=Person;
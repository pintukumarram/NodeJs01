const passport=require('passport');
const localStretegy=require('passport-local').Strategy;
const person=require('./persons');

passport.use( new localStretegy(async(username,password,done)=>{
  // Authentication logic here
  try{
// console.log('Received credentials:',username,password);
const user= await person.findOne({username:username});
if(!user)
  return done(null,false,{message:'Incorrect username.'});

  const isPasswordMatch=user.comparePassword(password );
  if(isPasswordMatch){
    return done(null,user);
  }else{
    return done(null,false,{message:'Incorrect username.'})
  }

  }catch(err){
 return done(err);
  }
}));
module.exports=passport;
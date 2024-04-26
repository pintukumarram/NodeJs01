const passport=require('passport');
const localStretegy=require('passport-local').Strategy;

passport.use( new localStretegy(async(username,password,done)=>{
  // Authentication logic here
  try{
console.log('Received credentials:',username,password);
const user= await person.findOne({username:username});
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
}));
module.exports=passport;
const fs=require('fs');
const os =require('os');

const user=os.userInfo();
const cp=os.cpus();
console.log(cp);
console.log(user);
console.log(user.username);

fs.appendFile('greeting.txt','Hello Dear '+user.username+'!\n',()=>{
  console.log();
})



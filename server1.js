
// const add=(a,b)=>{
//   const result=a+b;
//   console.log(`Addition of ${a} and ${b} is: `+result);
// };


const calculate=(a,b,add)=>{   
  const result2=a*b;
  console.log(`Multiplication of ${a} and ${b} is `+result2);
  add(9,6);

};

calculate(7,5,(a,b)=>{
  const result=a+b;
  console.log(`Addition of ${a} and ${b} is: `+result);
});

const notes=require('./notes.js');

const _=require('lodash');

const arr=["pintu","pintu","pintu","amar",1,2,1,3,1,2,7,"8","7"]
const filtr=_.uniq(arr);
console.log(filtr);






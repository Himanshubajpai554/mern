//same index
// const [sum,mul] = require('./myMath');
// const add = sum(9,10);

// const mull = mul(9,10);
// console.log(add);
// console.log(mull);


//same key
// const {sum,mul} = require('./myMath');
// const add = sum(9,10);

// const mull = mul(9,10);
// console.log(add);
// console.log(mull);

const figlet = require('figlet');
figlet("Tushar",(err,data)=>{
    if(err)console.log(err);
    else console.log(data);
})
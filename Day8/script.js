//Promise is an object which represents eventual completion or failuer of an async operation and its resulting value.
// const pr = new Promise((resolved,reject)=>{
//     const flag = true;
//     if(flag){
//         setTimeout(()=>{resolved("done")},5000);
//     }
//     else{
//         reject("not done");
//     }
// });
// setTimeout(() => {
//     console.log(pr);
// }, 5000);
// console.log(pr);

// pr.then((val)=>{
//     console.log(val);
// })

let ctn = 0;
let id;

const cb = () =>{
    ctn++;
    console.log("Done",ctn);
    if(ctn==4){
        clearInterval(id);
    }
};
const time = 1000;
id = setInterval(cb,time);


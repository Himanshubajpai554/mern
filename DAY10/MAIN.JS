// const fs = require("fs");
// const data = fs.readFileSync('./text.txt');
// console.log(data.toString());

// const data2 = fs.readFileSync('./text.txt',{encoding:"utf8"});
// console.log(data2.toString());

// const fs = require("fs");
// fs.readFile('./text.txt',{encoding:"utf-8"},(err,data)=>{
//     if(err)console.log("error occured",err);
//     else console.log(data);
// });
// console.log("End");

// const fs = require("fs");
// const write = fs.writeFileSync('./text.txt',"tushar",);
// const read = fs.readFileSync('./text.txt',{encoding: "utf-8"});
// console.log(read.toString());

// const fs = require("fs/promises");
// console.log("Start");
// fs.readFile('./text.txt',{encoding: "utf-8"}).then((data)=>{console.log("data is : ",data);}).catch((err)=>{console.log("error is:",err);})
// console.log("End");

// const fs = require("fs/promises");
// console.log("Start");
// fs.writeFile('./text.txt',"Tusharrr").then(()=>{console.log("Done");}).catch(()=>{console.log("Error");})
// console.log("End");

// const fs = require("fs/promises");
// console.log("Start");
// fs.appendFile('./text.txt',"Tushar bajpai").then(()=>{console.log("Done");}).catch(()=>{console.log("Error");})
// console.log("End");

// const fs = require("fs/promises");
// console.log("Start");
// fs.readFile('./text.txt',{encoding: "utf-8"}).then((data)=>{console.log("data is : ",data);}).catch((err)=>{console.log("error is:",err);})
// console.log("End");

// const fs = require("fs/promises");
// console.log("start");
// const data = fs.readFile("./data.json",{encoding:"utf-8"})

// data.then((data)=>{
//     const text = data.toString();
//     const arr = JSON.parse(text);
//     console.log(arr);
//     let score=0;
//     for(let i=0;i<arr.length;i++){
//         score += arr[i].Score;
//     }
//     console.log(score);
// }).catch((err)=>{})

const fs = require("fs/promises");
console.log("start");
const data = fs.readFile("./data.json", { encoding: "utf-8" });

data
  .then((data) => {
    const text = data.toString();
    const arr = JSON.parse(text);
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
       if(arr[i].id==3){
        console.log(arr[i]);
       }
    }
    const res = arr.find((data)=>{
        if(data.id===id)return true;
    });
    return res;
  })
  .catch((err) => {});

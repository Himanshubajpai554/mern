// const student = {
//     userName : 'tushar0',
//     roll : 11,
//     city: 'kanpur',
// }
// const {userName} = student;//object key matters
// console.log(userName);

//index matter
// const fruit = ['banana', 'apple', 'orange'];
// console.log(fruit[0]);
// const [,a,b] =fruit;
// console.log(a,b);


// const student = {
//     userName : 'tushar0',
//     roll : 11,
//     city: 'kanpur',
//     hobbies: [drawing,coding,painting]
// }
// const {userName} = student;//object key matters
// console.log(userName);

// hobbies[0] = studing;

// const {hobbies} = student;
// console.log(hobbies);
// console.log(student);

// const s2 = {...student};
// s2.userName = 'Himanshu';

// console.log(s2);

// s2.hobbies[0] = 'Gaming';
// console.log(s2.hobbies);
// console.log(student.hobbies);

// sum()
// sum(10)
// sum(10,20)
// sum(10,20,30)
// sum(1,2,3,4)
// sum(1,2,3,4,5)

// function sum( ...arr){
//     const res = arr.reduce((x,a) => {
//         console.log(x,a);
//         return x*a;
//     },+1);
//     console.log('--->',res);
// }
 

// function getData(){
    
// const pr = fetch('https://dummyjson.com/products');
//     pr.then((res) => {
//         const pr2 = res.json();
//         pr2.then((data)=>{
//             console.log(data);
//         });
//     });
// }
// getData();

// async function getData(){
//     const res = await fetch('https://dummyjson.com/products');
//     const data = await res.json();
//     console.log(data);
// }
// getData();

calc('sum',10,20,30,40);
calc('mul',10,20,30,40);

function calc(s,...arr){
    let ans;
    if(s=='sum'){
        ans = arr.reduce((acc,elem)=>acc+elem);
    }
    else{
        ans = arr.reduce((acc,elem)=>acc*elem);
    }
    return ans;
}

// const s2 = document.getElementsByTagName('section');
// const secondSection = s2[1];
// const title = secondSection.getElementsByTagName('h4');
// title[0].innerText = "Js callbacks";


// const title = document.getElementsByTagName('section')[1].getElementsByTagName('h4');
// title[0].innerText = "Jaisss";


// const title = document.querySelector("section:last-of-type>h4");
// title.style.color = "brown";
// title.className = "cs1";
// title.setAttribute('class', 'cs22');
// title.setAttribute('name', 'himanshu');


// const pr = document.createElement("p");
// const sec = document.getElementsByTagName('section')[0];
// sec.appendChild(pr); //last
// sec.prepend(pr); //first
// pr.innerText = "Hola senorita!";


// function printHello(){
//     console.log("Hello");
// }

// function inputClicked(){
//     console.log("input clicked");
// }

// function inputKeydown(e){
//     console.log("input key down",e.target.value);
// }
// function inputChanged(e){
//     console.log("input chnaged",e);
// }

// function handleUserAge(e){
//     console.log("Age",e.target.value);
// }

// function handleUserName(e){
//     console.log("Name",e.target.value);
// }

// function handleSubmit(e){
//     console.log("submit",e.target)
// }

// function handleSubmit(e){
//     e.preventDefault();
//     console.dir(e.target);

//     const userName= e.target[0].value;
//     const userAge= e.target[1].value;

//     console.log(userName, userAge);

//     if(userAge>18){
//         console.log("You are old");
//     }

// }

// const showResult = (res) => {
//     console.log(res);
//     const root = document.getElementById('root');
//     root.innerText = res;
// }

// const printPretty = (res) => {
//     const root = document.getElementById('root');
//     root.style.color = 'green';
//     root.innerText = res;
// }

// const sum = (a,b) => {
//     const res = a+b;
//     showResult(res);
// }

// const mul = (a,b) => {
//     const res = a+b;
//     showResult(res);
// }

// const sum = (a,b, fn) => {
//     const res = a+b;
//     fn(res);
// }

// const rr = sum(10,20);
// showResult(rr);
// printPretty(rr);

// const rr = sum(10,20,printPretty);

// const arr = [10,20,30];
// console.log(arr);
// arr.shift();
// console.log();

// const  arr = ['manzana','la frutas', 'kiwi'];
// const printValue = (a,b,c) =>{
//     console.log('value is:',a);
//     console.log('value is:',b);
//     console.log('value is:',c);
// }

// for(let i =0; i<arr.length; i++){
//     printValue(arr[i],i,arr);
// }

// const arra = [1,2,3,4];
// let a=0;
// arra.forEach((b)=>{
//     a=a+b;
// })

// console.log(a);

// const words = ['hola', 'senorita','senor','buskar'];
// const arr = words.filter(cb);
// const cb = (x) => {
//     if(x.length >= 5 ) return true;
//     else return false;
// }



// const pr = fetch('https://api.github.com/users/himanshubajpai554');
// console.log(pr);

// const cb1 = (e) => {
//     console.log('Fetch + ',e);
//     e.json();

// }

// const cb2 = (e) => {
//     console.log('fetch -', e);
// }

// pr.then(cb1).catch(cb2);

const root = document.getElementById('root')

const pr = fetch('https://dummyjson.com/products');

pr.then((res) => {
    const pr2 = res.json();
    pr2.then(renderUI);
}).catch((error) => {console.log("error is ",error)});

const renderUI = (data) =>{
    const products = data.products;
    for(let i =0; i<products.length; i++){
        root.append('${products[i].title} \n');
    }
}

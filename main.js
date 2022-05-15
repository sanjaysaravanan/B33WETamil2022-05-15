// const request = new XMLHttpRequest();

// request.open("GET", "https://restcountries.com/v3.1/all", true);

// request.onload = function (e) {
//   var response = JSON.parse(request.responseText);
//   response.forEach(element => {
//     console.log(element.flag);
//   });
// }

// request.send(null);

// Copy value & reference
// function func1(a, b) {
//   a = 100;
// }

// let a = 1;
// let b = 2;

// console.log(a)

// func1(a, b);

// console.log(a);
// console.log("This is HTML JS execution");
// console.log(window); // Browser will define it
// console.log(document);


// Copy By value
// function func1(a) {
//   a = 100;
//   console.log("A is", a);
// }

// let a = 1;

// console.log("A is ", a);

// func1(a);

// console.log("A is ", a);


// Copy by Reference
// function func2(obj) {
//   obj.a = 100;
//   console.log("Inside Func: A is ", obj.a);
// }

// let obj = {a: 1};

// console.log("A is ", obj.a);

// func2(obj);

// console.log("A is ", obj.a);

// const arr = [1,2,3];


// const objNew = {
//   name: "Sanjay",
//   age: 35,
// }

// for(let key in objNew) {
//   console.log(key, objNew[key]);
// }

// console.log(a)
// let a;
// a = 10; // re-initialize will work for const

// console.log(a)
// var a;

// console.log(x);

// var x = 100;

// console.log(x);

// Named Function
function Func1() {
  console.log("Func1");
}

// Anonymous Function
// const func2 = function () {

// }

// IIFE
// (function () {

// })()


// Arrow Fucntion
const Func3 = () => {
  
}
// Scope of the Variable

// Var 
var x = 0;
var x = 10; // re-declaratuion is possible

// let 
let y = 10;
// let y = 20; // re-declaration is not possible
// console.log(y);


// function func1() {
//   let z = 100;

//   {
//     let z = 1000;
//   }

//   console.log("After Inline Block z", z);
// }

// func1();

// Spread
// const arr2 = [ 1, 2, 3, 4 ];

// const newArr = [ 5, 6, ...arr2,];
// console.log(newArr);

// const obj2 = { name: "Sanjay", age: 35 };

// const newObj = { ...obj2, role: "Developer",  };
// console.log(newObj);


// Copy by Reference
function func2(obj) {
  obj.a = 100;
  console.log("Inside Func: A is ", obj.a);
}

// let obj = {a: 1};

// console.log("A is ", obj.a);

// func2({...obj}); // we are not referenc obj instead spreading and creating a new Reference

// console.log("A is ", obj.a);

// Rest Operator
// const arr2 = [ 1, 2, 3, 4 ];

// function func100(a, ...args) {
//   console.log(a);

//   console.log(args);
// }

// func100(...arr2);

// Array Destructuring
// const arr3 = [ 1, 2, 3, 4 ];

// const [a,b, ...restAllValues ] = arr3;
// console.log(a, b, restAllValues);

// const obj100 = { personName: "Sanjay", role: "Developer", bio: { DOB: "YYYY-MM-DD", YOP: "XXXX" } }


// const { personName, ...restAllProps } = obj100;
// console.log(restAllProps);

// MRF
// const ar200 = [1,2,3,4,5];

// MAP ---> return new Array formed
// const newArr200 = ar200.map((ele) => ele * 2);


// console.log(newArr200);

//  Filter returns a newArray fromed from calling the callback( returns a true / false )

// 10 % 2 ---> 0 even number
// 11 % 2 ---> 1 Odd Number 

// const newFilteredArr = ar200.filter( (ele) => ele % 2 ); // 0 & 1 as boolean
// console.log(newFilteredArr);

// Reduce --> anything
// const arrSum = [1,2,3,4,5];

// const resultSum = arrSum.reduce((prev, curr) => {
//   return prev + curr; 
// }, 10);
// console.log(resultSum);

// const a = 1;
// const b = 2;

btn1.addEvet("keydown", (event) => {
  const esistText = div.innerText;
  div.innerText = esistText + "1";
})



// console.log(`A: ${a} B: ${b}`); // Template Literal


// document.addEventListener('mouseover', () => console.log("Clicking the Document"));


let a = 1;
let b = 2;


// 1 2 3 +
// 4 5 6 -
// 7 8 9 *
// C 0 / =

// [1,2,3,+,4,5,6,-,7,8,9,*,C,0,/,=]

console.log("Line 215", a);

a = 100; 

console.log("Line 216", a);

a = 1000;
console.log("Line 217", a);

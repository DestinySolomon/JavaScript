// functions: reusable block of codes that perform a specific task

// ES5 SYNTAX

// function addNum (){}

// function addNum() {
//   return 3 + 70;
// }

// console.log(addNum());

// function names() {
//   return "abas" + " albert " + "nkem " + "fortune";
// }
// console.log(names());

// ES6 SYNTAX

// const subNums = () => {
//   return 78 - 240;
// };

// console.log(subNums());

// const nameList =() =>{
//   return( array = ["help", "sos", "help"])
// }
// console.log(nameList())

//Function Scope
// In JavaScript, function scope refers to the accessibility of variables within a function.
// In javascript, variables declared with var are function scope, meaning they are only accessible within the function they are declared in.

// setTimeout(() => {
//   console.log("This will run after 2 seconds");
// }, 2000);

// function mondayClass() {
//   if (true) {
//     var x = 10;
//     let y = 20;
//   }
//   console.log(x);
// }

// mondayClass();


// Closures and Lexical Scope
// closures gives us access to outer function scope from an inner function

// function outside(){
//   let numbers = 0
//   return function inside() {
//     numbers ++;
//     return numbers;
//   }
// }

// const reading = outside();

// console.log(reading()); // 1
// console.log(reading()); // 2
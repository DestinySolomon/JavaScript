// error handling in JS......
// This involves managing and responding to wrong time errors or exemptions that occur during code execution

// Try catch Method

// try {
//   let result = w /2;
//   console.log(result)
// }catch(error){
//   console.log("wrong input")
// }

// try{
//   var boom = 2 * y
//   console.log(boom)
// }catch(error){
//   console.error("what is cashout")
// }

// Throw method

// function divNum(a, b) {
//   if (a == 0) {
//     throw "cannot divide zero";
//   }
//   return a / b;
// }

// console.log(divNum(0, 10));

// const runSum = () => {
//   var c = 20;
//   var d = 30;

//   if (d > c) {
//     throw "this is imbalanced";
//   }
//   return c * d;
// };
// console.log(runSum());

//Finally method

try {
  let result = 10 / 2;
  console.log(result);
} catch (error) {
  console.log("wrong input");
} finally {
  console.log("everything else runs");
}

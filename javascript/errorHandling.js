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

// FUNCTION HOISTING

//JavaScript lifts declarations (like var, function) to the top of the code before running it.

greet(); // ✅ Works!

function greet() {
    console.log("Hello!");
}

//EXAMPLES 






// Error Handling With Bro Code
// Error is an object that is created to represent a problem.
// Error = An error is an unexpected problem that arises during the execution of a program, disrupting its normal flow. Errors can occur for various reasons, such as invalid input, unavailable resources, or programming mistakes.
//types of errors in JS
// 1.Syntax Error = Occurs when the code is not written according to the syntax rules of the programming language.
// 2.Runtime Error = Occurs during the execution of the program, often due to invalid operations or references.
// 3.Logical Error = Occurs when the code runs without crashing, but produces incorrect or unexpected results.

// EXAMPLES

console.log("Hello");

console.log("You have reached the end!");
//if say i mispell log as leg, we will get an uncaught typeerror.
// One problem tho will be that the program will stop executing at that point, and any code after that line will not run.

// Errors when they occor interrupts the normal flow of our program.

//Another example is trying to access a variable that does not exist.
console.log(x); // this will give a reference error because x is not defined anywhere in the code

// Error can generated for all sorts of issues , like:
// Network errors
//promise rejections
//security errors
//invalid user input

// when we encounter an error doing one of these things, an error object will be created which interrrupts our program.
//There is a solution tho. That is to handle the error when they occur. we can do that using
//try{} = contains the code that may cause an error
//catch(error){} = contains the code that runs if an error occurs in the try block. The error object is passed as a parameter to the catch block.
//finally{} = contains code that will always run after the try and catch blocks, regardless of whether an error occurred or not. This block is optional.

// Example:

try {
  console.log(y);
  // Network errors
  //promise rejections
  //security errors
} catch (error) {
  console.log(error);
} finally {
  // do not write the finally block until you have explained the note below.
  //Uses of the finally block
  //closing files
  //closing connections
  //releasing resources
  console.log("This always executes");
}
console.log("You have reached the end");

// Now even tho there was an error in the try block, the program did not crash, and the code after the try-catch block still ran.
// To catch error, instead of using console.log, I recommend using console.error() to log the error message. This will display the error message in red in the console, making it easier to identify errors in your code.

// Now optionally, we can add a finally block after the catch block.

// Errors from user inputs
// errors can also occur when accepting user inputs because we do not know what the user types in. In a worst case scenario a user can type in a malicious code that can harm our program.

// Example:
const dividend = window.prompt("Enter a divided:");
const divisor = window.prompt("Enter a divisor:");

const result = dividend / divisor;
console.log(`The result is: ${result}`);

// Now if the user types in 0 as the divisor, we will get an infinity result which is not desirable. To handle this, we can use try-catch to catch any errors that may occur due to invalid user inputs.

try {
  const dividend = window.prompt("Enter a divided:");
  const divisor = window.prompt("Enter a divisor:");

  const result = dividend / divisor;
  console.log(`The result is: ${result}`);
} catch (error) {
  console.error(error);
}

// just to try this, i will add a consol.log message

console.log("You have reached the end!");

// let us intentionally cause an error using if statment and throw keyword

try {
  const dividend = window.prompt("Enter a divided:");
  const divisor = window.prompt("Enter a divisor:");

  if (divisor === 0) {
    // we are calling the error constructor to create a new error object with a custom message. We pass an argument to the Error constructor which is a string describing the error.
    throw new Error("You can't divide by zero");
  }

  const result = dividend / divisor;
  console.log(`The result is: ${result}`);
} catch (error) {
  console.error(error);
}
// if a user types in a string instead of a number, we will get NaN as the result. To handle this, we can add another check to see if the inputs are valid numbers.

try {
  const dividend = Number(window.prompt("Enter a dividend:"));

  const divisor = Number(window.prompt("Enter a divisor:"));

  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values must be a number");
  }
} catch (error) {
  console.error(error);
}

// Example 2: Simulating a cashout process
const balance = 1000;
const cashout = window.prompt("Enter amount to cash out:");

try {
  if (cashout > balance) {
    throw new Error("Insufficient funds");
  }
  balance -= cashout;
  console.log(`You have successfully cashed out: ${cashout}`);
} catch (error) {
  console.error(error);
}

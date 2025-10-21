// A function is like a machine or formula that takes something in (input), works on it, and gives something out(output).
//Imagine a blender: you put fruits in (input), it blends(proces), and gives you juice(output). That's what a function does in code.
// The method of writing functions is called function declaration.
// Two ways of writing functions
//1. Normal function (old school way)
// Arrow function(newer, shorter way)

//Both do the same job, just different writing styles

// NORMAL FUNCTIONS  EXAMPLES

//Example1: A simple function to say hello

// function sayHello() {
//   console.log("Hello, welcome to JavaScript");
// }

// sayHello(); // output

// The act of calling a function is called invoking the function. So we can either say we are calling or invoking a function

// // Example2: Function with a parameter(input)

// function greet(name) {
//   console.log("Hello" + " " + name + "!");
// }
// greet("John"); // output




// Anytime we get a variable and set it equal to something whether it's a function or string or something else, that is known as an expression. E.g

// const speak = function () {
//   console.log("Good Day!");
// };

// speak();


// // Examples 3: Function that adds two numbers

// function addNum(a, b) {
//   return a + b;
// }
// console.log(addNum(5, 30)); // output

// // Example 4: function that checks if a number is even

// function isEven(num) {
//   return num % 2 === 0;
// }
// console.log(isEven(4));
// console.log(isEven(7));

// //Example 5: function that calculates the area of a triangle

// function rectangleArea(length, width) {
//   return length * width;
// }
// console.log(rectangleArea(5, 7));

// // Example 6: Function to reverse a string
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("School"));

// // Example 7: function to find the maximum of two numbers
// function max(x, y) {
//   if (x > y) return x;
//   else return y;
// }
// console.log(max(20, 50));

// // Example 8: Function with default value

// function greetStudent(name = "Student") {
//   return "Welcome" + " " + name + "!";
// }
// console.log(greetStudent());
// console.log(greetStudent("Dee"));

// // Example 8: Function that multiplies numbers in an array

// function multiplyAll(numbers) {
//   let product = 1;
//   for (let num of numbers) {
//     product *= num;
//   }
//   return product;
// }
// console.log(multiplyAll([2, 3, 4]));

// // Example 10: Function to Check pass/fail

// function checkResult(score) {
//   if (score >= 50) return "pass✅";
//   else return "fail❌";
// }

// console.log(checkResult(74));
// console.log(checkResult(30));

// Arrow Functions are like shorthand in writing

// EXAMPLES OF ARROW FUNCTIONS

//Example 1: Simple arrow function

// const sayHi = () => console.log("Hello");
// sayHi();

// //Example 2: Arrow function with parameter
// const greet = (name) => console.log("Hello" + " " + name);
// greet("Dee");

// //Example 3: Arrow function that adds number

// const add = (a, b) => a + b;
// console.log(add(10, 5));

// //Example 4: Arrow function with one parameter(no need for brackets)

// const square = (num) => num * num;
// console.log(square(6));

// //Example 5: Arrow function retruning an object

// const studentInfo = (name, age) => ({ name: name, age: age });
// console.log(studentInfo("Dee", 500));

// // Example 6: Arrow functions with multiple lines (use curly braces + return)

// const getGrade = (score) => {
//   if (score >= 70) return "A";
//   else if (score >= 50) return "C";
//   else return "F";
// };
// console.log(getGrade(80));
// console.log(getGrade(40));

// // Example 7: Arrow function with default parameter

// const greetStudent = (name = "Student") => "Hi " + name;
// console.log(greetStudent());
// console.log(greetStudent("Felix"));

// // Example 8: Arrow function inside an array map()

// const numbers = [1, 2, 3, 4];
// const squares = numbers.map((num) => num * num);
// console.log(squares);

// //Example 9: Arrow  function for filtering
// const ages = [12, 18, 20, 14, 25];
// const adults = ages.filter((age) => age >= 18);
// console.log(adults);

// // Example 10: Arrow function with reduce()
// const nums = [1, 2, 3, 4, 5];
// const total = nums.reduce((sum, n) => sum + n, 0);
// console.log(total);

// Where functions can be used

//form validation
//calculations
//APIs
//Animations
//Event Handling
//Data Processing
//Game Logic

// SHOPPING CART LOGIC


let cart = []; // empty cart at first

//normal function - add item(with quantity)
function addItem(name, price) {
  //check if item already exists in cart
  let found = cart.find((item) => item.name === name);
  if (found) {
    found.quantity += 1; //increase quantity
  } else {
    cart.push({ name: name, price: price, quantity: 1 });
  }
  showCart();
}

//normal function - remove item(one quantity at a time)

function removeItem(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1; // decrease quantity
  } else {
    cart.splice(index, 1); // remove completely
  }
  showCart();
}

// Arrow function - Calculate Total
const calculateTotal = () =>
  cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

// Arrow Function - Display Cart
const showCart = () => {
  let list = document.getElementById("cartList");
  list.innerHTML = "";

  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price} x ${item.quantity} = $${
      item.price * item.quantity
    }`;

    //Remove button

    let btn = document.createElement("button");
    btn.textContent = "❌";
    btn.onclick = () => removeItem(index);

    li.appendChild(btn);
    list.appendChild(li);
  });
  document.getElementById("total").textContent = calculateTotal();
};

//Normal function - clear cart

function clearCart() {
  cart = [];
  showCart();
}

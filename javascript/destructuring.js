/*
let and const

Template Literals

Destructuring



Why let and const are better than var

They don’t allow weird “re-declaring” mistakes.

They only exist inside the block ({}) they are created in — this is called block scope.
*/
{
  let x = 10;
  console.log(x); // Works
}
console.log(x); // ❌ Error, x is not defined outside the block
//They make it easier to see which variables will change (let) and which won’t (const).

// Template Literals
// Template literals are string literals allowing embedded expressions. They are enclosed by the back-tick (` `) character instead of double or single quotes. they make it easier to create strings with variables and expressions.

let fname = "Dee";
let age = 17;
console.log("My name is " + fname + " and I am " + age + " years old.");
// Using template literals
console.log(`My name is ${fname} and I am ${age} years old.`);


// Destructuring
// Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays.
//simply put, it is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// Destructuring an Object

let person = {
  fullName: "Dee",
  agee: 17,
  country: "Nigeria"
};

// old way:
// let fullName = person.fullName;
// let agee = person.agee;


// ES6 way:
let { fullName, agee, country } = person;

console.log(fullName); // Dee
console.log(agee);  // 17


// Destructuring an Array
let colors = ["red", "blue", "green"];

// old way:
let first = colors[0];
let second = colors[1];

// ES6 way:
let [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); // red
console.log(secondColor); // blue



const fruits = ["apple", "banana", "orange"];

// Destructuring
const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit);  // apple
console.log(secondFruit); // banana
console.log(thirdFruit);  // orange

/*
WHAT IS JS?

JS is a high-level, objected-oriented, multi-paradigm programming language. 
By high-level, we mean that we don't have to worry about complex stuff like memory management.
By object-oriented, we mean that JS is based on objects for storing most kinds of data.
By multi-paradigm, we mean that we can use different styles of programming in JS.(It is flexible)
By programming language we are referring to a tool that allows us to write codes that will instruct a computer to do something.


*/

//An object is a collection of related properties and/ or methods.
//Object uses key: value, function. They can represent real world objects (people, products, places)



const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 70,
    isEmployed: true,
}
console.log(person1.firstName);
console.log(person1.lastNametName);
console.log(person1.age);
console.log(person1.isEmployed);

// JavaScript method is an object property that contains a function definition

// const person ={
//     firstName: "Dee",
//     lastName: "Solomon",
//     greet: function greet (){
//         console.log("Hello World!")
//     }
// }
// person.greet();

// we created a method(function) in the person object and call the method using object name dot method name and then we add parenthesis. We can as well write this using the anonymous function like this:

// const person ={
//     firstName: "Dee",
//     lastName: "Solomon",
//     greet: function (){
//         console.log("Hello World!")
//     }
// }
// person.greet();

// DECLARING A FUNCTION OUTSIDE AN OBJECT AND ASSIGNING IT TO AN OBJECT AS A METHOD

const person = {
  firstName: "Dee",
  lastName: "Solomon",
};

function greet() {
  console.log("Hello World!");
}

person.greeting = greet;
person.greet();

console.log(person); // to display this object in the console

// we assigned the person object to the greet function using the keyword, greeting.

// Another way to declare a method for an object
const person = {
  firstName: "Dee",
  lastName: "Solomon",
  greet() {
    console.log("Hello World!");
  },
};

person.greet();

// "This" keyword
// To access the other properties of an object within a method of the same object we can use "this" keyword.
const person = {
  firstName: "Dee",
  lastName: "Solomon",
  greet: function () {
    console.log("Hello " + this.firstName);
  },
};
person.greet();

// getting two properties in an object

const person = {
    firstName: "Dee",
    lastName: "Solomon",
    getFullName: function(){
       return this.firstName + " "  + this.lastName;
    }
};
console.log(person.getFullName())


//NOTE: If we use "this" keyword alone, or inside a function. Then it will refer to the global object, that is "window" object.

console.log(this);
//when we use "this" keyword in the "event" then it will refer to the element that receive the event.

// it is not a variable so it's value cannot change
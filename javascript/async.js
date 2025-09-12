// What does Asynchronous mean?

const { tryEach } = require("async");

// Synchronous JavaScript → Runs one line at a time, in order.
// Example: If one line takes 5 seconds, the next line must wait.

// Asynchronous JavaScript → Lets long tasks run in the background without blocking other code.
// Example: Fetching data from a server, waiting for a timer, or reading a file.

// 👉 Imagine ordering food in a restaurant:

// Synchronous = You wait at the counter until your food is ready, then you move on.

// Asynchronous = You order, then sit down and do other things. When your food is ready, the waiter brings it.

// 🔹 Tools for Asynchronous JavaScript

// Callbacks

// Promises

// async / await

// Let’s break them down:


// 1. Callbacks

// A callback is just a function passed into another function to be run later.

// Example with setTimeout:


// console.log("Start");

// setTimeout(() => {
//   console.log("This runs after 2 seconds");
// }, 2000);

// console.log("End");





// What is fetch?
// fetch() is a built-in JavaScript function for making HTTP requests.
// It returns a Promise, so we can handle responses asynchronously.

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json()) // convert response to JSON
//   .then(data => console.log(data))   // log the data
//   .catch(error => console.log("Error:", error));


// Step by step:

// We call fetch with a URL.
// It returns a Promise with the HTTP response.
// We use .json() to parse the response into JavaScript objects.
// We get the data in the .then.
// If anything fails, .catch runs.
// ✅ This will log an array of users.

// Example 2: Using async/await

  async function getUsers() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let users = await response.json();
      console.log(users);
    } catch (error) {
      console.log("Message: Runtine eror", error);
    }
  }
  
  getUsers();





//   Step by step:
// await fetch(...) waits for the API response.
// await response.json() waits for JSON parsing.
// Errors are caught in the catch block.
// ✅ This is cleaner than chaining .then().






// Example 3: Using the Data

// Let’s say we only want the names of users:

async function getUsers() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let users = await response.json();
      let names = users.map(user => user.name)
      console.log(names);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  getUsers();

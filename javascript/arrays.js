// let numbers = [ 7, 18, 20, 22, 25, 30, 67, 679, 5638 ]

// console.log(numbers[2])
//            0          1
// var cars = ['bmw', 'rolls royce', 

//    2            3
//  'lamborghini', 'benz', 

//  4          5         6           7
//  'porsche', 'audi', 'lexus LFA', "genesis"]

  

// array methods

// 1 .push() - add items at  the back of the array 

// cars.push('bentley','toyota', 'ferrari')

// numbers.push(15)


//2 .pop() - removes an item from the end 

// cars.pop()
// cars.pop()
// cars.push('chile')
// cars.pop()

// numbers.pop()

// 3 .shift() removes items at the start 

// cars.shift()

// numbers.shift()

// 4 .length returns the number of items in the array 

// console.log(cars.length)
// console.log(numbers.length)

// 5 .unshift() adds an item at the front of the array 

// cars.unshift('bettle')
// cars.unshift(200783628)

// numbers.unshift('you dey craze?')
// numbers.unshift(false, null)

// 6 .includes() checks the array for a value or item 

// console.log(cars.includes('bmw'))
// console.log(cars.includes('pagani'))

// 7 .indexOf()

// console.log(numbers.indexOf(25))
// console.log(cars.indexOf('audi'))
// console.log(cars.indexOf('lexus LFA'))

// 8 .splice( start delete, items)

// cars.splice(4, 8, 'dodge charger')

// cars.splice(2, 3, "hiace")

//  numbers.splice(0, 3, 55)

//  numbers.splice(0,2, 70)

// 9 .slice (start, end)

// let sliced = numbers.slice( 0, 1 )

// let sliced = numbers.slice( 3, 9 ) 

// let sliced = numbers.slice( 1, 9)

// let sliced = numbers.slice(4,7)
// let sliced = numbers.slice( 2, 7 )

// console.log(sliced)


// advance methods 
// .map()

// let foods = [ 'sharwama', 'beans', 'garri',
//    'akara', 'afang', 'chicken' ]

  //  console.log(foods)

// let foodLegnth = foods.map( foods => foods.length )

// console.log(foodLegnth)

// let num = [2,3,4,5,6,7,8]

// console.log(num)
 
// let nums = num.map(num => num * num)

// console.log(nums)

// .filter() removes the values that 
// do not meet the condition and returns the rest

// let foodsLength = foods.filter(foods => foods.length >= 8)

// let numLength = num.filter(num => num < 6)


// .reduce() 

// console.log(numLength)
/*

push() - add to end

pop() - remove from end

unshift() - add to beginning

shift() - remove from beginning

indexOf() - find position

includes() - check if exists

sort() - arrange in order

length - get number of items
indexOf() - find position
.map() - transform each item

.reduce() - combine into single value
.splice() - add/remove at specific position
.slice() - extract portion of array
.filter() - filter based on condition









1. .reduce() – Combine Into a Single Value

Meaning:
reduce() is used when you want to take all the items in an array and combine them into one final result.
You can use it to add numbers, multiply values, or even join strings together.

STRUCTURE:
array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initialValue);



Think of it like:
You’re collecting all students’ test scores to get a total score or average.


Example:

let scores = [10, 20, 30, 40];
let total = scores.reduce((sum, score) => sum + score, 0);
console.log(total); // 100


EXAMPLE 2:
let names = ["Dee", "Max", "Joy"];
let classList = names.reduce((result, name) => result + ", " + name);
console.log(classList); // "Dee, Max, Joy"


👉 Summary: .reduce() helps you summarize or combine everything into one value.



2. .splice() – Add or Remove at a Specific Position

Meaning:
splice() changes (edits) the original array — it can remove, add, or replace elements at any position.

STRUCTURE:

array.splice(startIndex, deleteCount, item1, item2, ...);


startIndex → where to start changing

deleteCount → how many items to remove

item1, item2 → (optional) items to add


Think of it like:
You’re editing the class list — removing a student or adding a new one in the middle.

Example:

let students = ["Dee", "Max", "Joy", "Tina"];
students.splice(1, 2); // removes 2 items starting from index 1
console.log(students); // ["Dee", "Tina"]


EXAMPLE 2:

let students = ["Dee", "Joy", "Tina"];
students.splice(1, 0, "Max"); // add "Max" at position 1
console.log(students); // ["Dee", "Max", "Joy", "Tina"]


👉 Summary: .splice() is for editing the original list — add, remove, or replace directly.


3. .slice() – Extract a Portion of the Array

Meaning:
slice() is used to copy or extract a part of an array without changing the original one.

STRUCTURE:
array.slice(startIndex, endIndex);
startIndex → where to start copying

endIndex → where to stop (not including this index)

Think of it like:
You’re photocopying a few pages from a textbook — the original stays the same.

Example: Getting a portion of students

let students = ["Dee", "Max", "Joy", "Tina", "Ben"];
let groupA = students.slice(0, 3); 
console.log(groupA); // ["Dee", "Max", "Joy"]

EXAMPLE 2: copying the last two students

let students = ["Dee", "Max", "Joy", "Tina", "Ben"];
let lastTwo = students.slice(-2);
console.log(lastTwo); // ["Tina", "Ben"]


👉 Summary: .slice() is for copying or cutting out part of the array safely — the original stays untouched.


4. .filter() – Get Only the Items That Meet a Condition

Meaning:
filter() creates a new array with only the items that pass a test (condition).
It doesn’t change the original array.

STRUCTURE:
array.filter(item => condition);
item → each element in the array
condition → a test that returns true or false


Think of it like:
You’re checking students’ scores and selecting only those who passed.


Example: Filtering students who passed

let scores = [35, 70, 90, 45, 80];
let passed = scores.filter(score => score >= 50);
console.log(passed); // [70, 90, 80]


EXAMPLE 2: Filtering names that start with "J"


let names = ["John", "Dee", "Jane", "Max"];
let jNames = names.filter(name => name.startsWith("J"));
console.log(jNames); // ["John", "Jane"]


👉 Summary: .filter() helps you select only what fits your condition — like a sieve that lets only the right things through.
*/














// var object = {
// // key    value
//   name: 'retun', 
//   class : 'come' }





//NEW LECTURES WITH MR ESAINT MJAY


// A forEach in JavaScript is a built-in array method that lets you run some code for each element inside an array.

// A forEach is a method that loops through every items and run some code for each one.

// Array.forEach(function(element, index, array){
//     //code to run for each one
// })

// element → the current item in the array
// index → the position of the current item
// array → the whole array itself


// users is the array you already have (with multiple objects).
// user is just a variable name that represents each item inside the users array while map is looping through it.





// So user is not a new variable you defined somewhere else,it is just a temporary placeholder that map gives you for the current item.

let fruits = ["apple", "banana", "mango"];

fruits.forEach(fruit => {
    console.log(fruit)
})

// A forEach loop with index

let colours = ["Red", "Green", "Pink"];

colours.forEach((c, i) => {
    console.log(c + ": " + i)
})



// condition inside forEach

let numbers = [1, 2, 3, 4, 5];


numbers.forEach(element => {
    if (element % 2 === 0) {
        console.log(element + " is even")
    } else {
        console.log(element + " is odd")
    }
});



let scores = [45, 56, 78, 84, 95];


scores.forEach(score => {
    if (score >= 70) {
        console.log('Pass', score)
    } else {
        console.log("Fail", score)
    }
})

// MAP OF ARRAY

// A map is an array method in JavaScript that creates a new array by transforming each element of the original array.

// Take each item → do something with it → return a new item → collect all into a new array.

// let newArray = Array.map(element, index, array) {
//     return something;
// }

// Example 1: Multiply numbers

let sum = [1, 2, 3, 4];

let doubled = sum.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]



// Example 2: Extracting properties from objects 

let students =
    [
        {
            "name": "Esaint",
            "age": 100,
            "Position": "Javascript Totur",
        },
        {
            "name": "Sifon",
            "age": 24,
            "Position": "Accountant",
        },
        {
            "name": "Shalom",
            "age": 23,
            "Position": "Social Media Manager",
        }

    ];

let details = students.map(student => student)

console.log(details)

// for each user inside users {
//     take user.name
//  }


// converting a string with array;


let words = ['javascript'];

let uppercase = words.map(word => word.toUpperCase());

console.log(uppercase);


// FILTER MAP 

const datas =
    [
        { name: "Mike", age: 25 },
        { name: "Sarah", age: 17 },
        { name: "John", age: 30 }
    ]

let adult = datas.filter(data => data.age >= 18);

console.log(adult)



// Explanation:

// users = the original array.
// user = represents each item inside users as filter loops through.
// user.age >= 18 = the condition.
// If the condition is true, the item is kept. If false, it’s skipped.

// Step by step:

// filter looks at the first item: { name: "Mike", age: 25 } → condition true → keep it.
// Next item: { name: "Sarah", age: 17 } → condition false → skip it.
// Next item: { name: "John", age: 30 } → condition true → keep it.




// REDUCE
//reduce is used when you want to take an array and combine it into a single value (sum, average, object, etc.).

let numbering = [10, 20, 30, 40];

let total = numbering.reduce((acc, num) => acc + num, 0);

console.log(total);



// Explanation:

// numbering = the array we’re reducing.
// (acc, num) => acc + num = callback function.
// acc = the accumulated value (starts at 0 because we gave it , 0 at the end).
// num = each item in the array.

// The 0 after the function is the initial value of the accumulator.

// Step by step:

// Start: acc = 0.

// Take first number: 0 + 10 = 10.
// Next number: 10 + 20 = 30.
// Next number: 30 + 30 = 60.
// Next number: 60 + 40 = 100.
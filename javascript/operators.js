// Operators
// Operators are special symbols that perform operations on variables and values.
// There are several types of operators in JavaScript, including:

// 1. Arithmetic Operators
// These operators are used to perform basic mathematical operations.

// 2. Assignment Operators
// These operators are used to assign values to variables.

// 3. Comparison Operators
// These operators are used to compare two values and return a boolean result.

//4. Logical Operators
// These operators are used to combine multiple boolean expressions.

// 5. string Operators
// These operators are used to concatenate strings or perform operations on string values.

// Addition Arithmetic Operators

// Arithmetic are -, +, *, %, **, /, ++, --

// var addNum = 2 + 3; // Addition
// let add_Num = 1205 + 5555; // Addition with variables

//sub arithmetic operators
var subNum = 90 - 20;
let sub_Num = 1000 - 500; // Subtraction with variables

// console.log(subNum);
// console.log(sub_Num);

// division arithmetic operator

let divNum = 4 / 3;
var div_Num = 7 / 21;

// multiplication operator

let multNum = 4 * 8;
var mult_Num = 0.8 * 300;

// modulus operator()

let modNum = 21 % 6;
var mod_Num = 27 % 4;

// increment operator(adds 1)

// let incNum = 20;
// incNum++;

// let inc_Num = 32;
// inc_Num++;

// console.log(inc_Num);

//decrement operator(subtracts 1)

// let decNum = 20;
// decNum--;

// var dec_Num = 32;
// dec_Num--;

// console.log(decNum);

// comparison operators are: == (loose), === (strict), !=, !== (strict), >, <, <=, >= These returns boolean (true/false)

// == loose equal to {compares value but does not check data type}

// console.log(5 == 5);
// console.log(5 == "5");

// === compares the value and data type

// console.log(5 === 5);
// console.log(5 === "5");
// console.log(5.0 === 5);

// console.log("123456" === "123456");

// console.log("wisdom" === "wisdom");

// != (not equal to. Compares value but not data type)

// console.log(5 != 5);
// console.log(6 != 5);
// console.log("5" != 5)
// console.log("res" !="res")

// !== (strict equal to. Compares value and data type)

// console.log(5 !==5);
// console.log(6 !==5);
// console.log("5" !==5)
// console.log("res" !=="res")

//  > greater than

// console.log(10 > 2);
// console.log(110.7 > 200);

//  <= less than or equal to

// console.log(4 <= 2 * 2);
// console.log(7 <= 2 * 2);
// console.log(2 / 3 <= 1);

//  >= greater than or equal to

console.log(7 >= 2 * 2);
console.log(5 >= 200);
console.log(3 / 3 >= 1);

//LOGICAL OPERATORS
//and (&&) or (||) not(!)

// and (&&)

let age = 25;
let hasLincense = true;

if (age >= 18 && hasLincense == true) {
  console.log("This person can drive");
} else {
  console.log("This person cannot drive");
}

let funds = 700;
let hasAccount = false;

// if(funds >= 200 && hasAccount == true){
//   console.log("this user can be a customer")
// }else{
//   console.log("this user cannot be a customer")
// }

// Logical or (||)

let fund = 700;
let hasAccounts = false;

if (fund >= 700 || hasAccounts == true) {
  console.log(true);
} else {
  console.log(false);
}

let ages = 35;
let hasLincenses;
if (ages >= 40 || hasLincenses == true) {
  console.log("user should drive");
} else {
  console.log("user should not drive");
}

// Logical Not (!)

let Destiny = true;
if (!Destiny) {
  console.log("Logged in");
} else {
  console.log("please log in");
}

// ASSIGNMENT OPERATORS

//   Types of assignment operators
// =
// +=, -=, *=, /=, %=, **=

// = (equal to)

var webz = 20;
const numbersz = 20 + 10;

// += (addition assignment operators)

let web = 20;
web += 10;

let webs = 1.4537 + 15.73;
webs += 30;

// console.log(webs);

let weed = "red";
weed += "car";
console.log(weed);

// (Subtraction Assignment)

let net = 30;
net -= 30;
// console.log(net);

// (Division assignment)

let nets = 25;
nets /= 5;
// console.log(nets);

var hint = 21;
hint /= 7;
// console.log(hint);

// (multiplication assignment)

var hints = 70;
hints *= 10;
// console.log(hints);

var hintz = 30;
hintz %= 10;
// console.log(hintz);

//Exponent operator(**)

var exp = 5;
exp **= 5;
console.log(exp);

//(exponent assignment =**)

var expz = 20;
expz **= 2;
console.log(expz);

// String Operators

// + concatenation

// var stin = "hello ";
let stins = "welcome to Mita School ";
// console.log(stin + stins);

console.log("Hello" + "" + "welcome to Mita School");

// Concatenation assignment

let websz = "red";
websz += " car";
console.log(websz);

let stin = "hello";
stin += " Welcome to Mita";
console.log(stin)

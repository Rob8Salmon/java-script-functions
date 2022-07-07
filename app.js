/*
function sum(num1, num2) {
    return num1 + num2;
}
let result = sum(2, 3);
console.log(result);
*/

/*

function greeting() {
  let message = "Hello"; // We have a function greeting that declares a variable called message and assigns the value Hello to it.
}
greeting();
console.log(message);

*/

/*
function greeting() {
  let message = "Hello";
  let sayHi = function hi() {
    console.log(message);
  };
  sayHi(); // Hello
}

greeting();
*/

// function greeting() {
//   let message = "Hello";
//   let sayHi = function hi() {
//       let message = 'Hi';
//   };
//   sayHi();
//   console.log(message); // Hello
// }

// greeting();

// let message = "Hello";
// if (message === "Hello") {
//     let count = 100;
// }

// console.log(count); // Error, count is outside of scope/this line is outside of scope

// function greeting() {
//     console.log('Hello');
// }
// greeting(); // Hello

// (function() {
//     console.log("Hello"); // Hello
// })();

// function setupCounter( val ) {
//     return function counter() {
//         return val++;
//     }
// }
// let counter1 = setupCounter(0);
// console.log(counter1());    // 0
// console.log(counter1());    // 1
// let counter2 = setupCounter(10);
// console.log(counter2());    //10

// let greetings = function () {
//   return "Hello World!";
// };
// let message = greetings();
// console.log(message); // Hello World!

// let greetings = () => {
//   return "Hello World!";
// };
// let message = greetings();
// console.log(message); //Hello World!

// // Funtion 2
// let greet = function greetings(name) {
//   return "Hello " + name;
// };
// let message = greet("John");
// console.log(message); //Hello John

// // Arrow Function 2
// let greetings = (name) => "Hello " + name;
// let message = greetings("John");
// console.log(message); // Hello World

// let sum = (num1, num2) => num1 + num2;

// let output = sum(10, 7);
// console.log(output);

let message = {
  name: "John",
  regularFunction: function () {
    console.log(this);
    console.log("Hello " + this.name);
  },
  arrowFunction: () => console.log("Hi " + this.name),
};
message.regularFunction();
message.arrowFunction();

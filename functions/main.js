"use strict";
function logger() {
  console.log("The name is bond, Ionic bond");
}

logger();

// the classic fruit processor

function fruitProcessor(apples, orange) {
  console.log(apples, orange);

  const juice = `Juice with ${apples} apples and ${orange} oranges`;
  return juice;
}
fruitProcessor(7, 8); //running the function

const yummyJuice = fruitProcessor(4, 7);
console.log(yummyJuice);
// Write a JavaScript function named calculateRectangleArea that takes two parameters: width and height.

function calculateRectangleArea(width, height) {
  const value = width * height;
  return value;
}

const area = calculateRectangleArea(10, 7);
console.log(area);

function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Wendi");

// function expressions

let Hey = function (brother) {
  console.log(`Hello there ${brother}`);
};
Hey("Wendi ");

//Function Declaration:

// Syntax: Uses the function keyword followed by the function name.
// Hoisting: Entire function is hoisted to the top of the scope, so it can be called before it's declared.
// Usage: Can be called before the declaration.

greet("John"); // This works even before the declaration

function greet(name) {
  console.log(`Hello, ${name}!`);
}

const sayHello = () => {
  console.log("hello");
};

sayHello();

const rectArea = (width, height) => {
  const product = width * height;
  return product;
};

console.log(rectArea(10, 10));

const doubleNum = (num) => {
  return num * 2;
};
console.log(doubleNum(47));

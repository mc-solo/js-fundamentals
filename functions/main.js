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

const area = calculateRectangleArea(9, 7);
console.log(area);

"use strict";

// Given an array of numbers, write a function that removes the elements at even indexes using the splice() method. The function should modify the original array.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// output: [2,4,6,8]
function removeEvenIndexes(numbers) {
  // loop throught the array
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
      numbers.splice(i, 1);
    }
  }
}

removeEvenIndexes(numbers);
console.log(numbers);

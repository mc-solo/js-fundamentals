'use strict';

// // the for loop

// //  when to use the for loop
// // 1. when there is a clear initialization and update statements
// // 2. when there is a clear iterating range for the given code inside the for loop

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// console.log();
// // the while loop

// // when to use while loop?
// // 1. when there is no clear initialization and update statement
// // 2. when you want to ensure that the code execute at least once (the do...while loop)
// // 3. When the termination codition is dynamic and cannot be expressed easily in for loops

// let j = 0;

// while (j <= 5) {
//   console.log(j);
//   j++;
// }

// iterating through an array

// const arr = [1, 11, 3, 33, 4];
// console.log(`length: ${arr.length}`);
// console.log();

// // i should always stay less thatn arr.length
// for (let i = 0; i <= arr.length - 1; i++) {
//   console.log(arr[i], typeof arr[i]);
// }

// looping backwards

const person = ['Wondwosen Asegid', 21, 'developer', 'coding'];

for (let i = person.length - 1; i >= 0; i--) {
  console.log(person[i]);
}

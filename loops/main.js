"use strict";

// the for loop

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

console.log();
// the while loop

// when to use while loop?
// 1. when there is no clear initialization and update statement
// 2. when you want to ensure that the code execute at least once
// 3. When the termination codition is dynamic and cannot be expressed easily in for loops

let j = 0;

while (j <= 5) {
  console.log(j);
  j++;
}

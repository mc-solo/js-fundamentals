// explicit conversions

const x = "7";
const y = 40;
const sum = Number(x) + y;

console.log(
  `Type of x: ${typeof x}, Type of Number(x): ${typeof Number(x)}, sum: ${sum}`
);

// implicit coercion

let num1 = "7";
const num2 = 40;
const result = num1 + num2;
console.log(result); //expected to be a string

console.log(typeof result);

let varName = "true";
console.log(typeof varName);
console.log(typeof Boolean(varName));

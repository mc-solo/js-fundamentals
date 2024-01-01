'use strict';

// Short circuit: evaluation of an expression stops as soon as the result is determined

// Logical AND (&&) operator

const result = true && 'Hello';
console.log(result); //result should be hellp cuz the first one is a truthy value

// Logical OR (||) operator

const greeting = '' || 'Hello';
console.log(greeting);

'use strict';

// prodecural method

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

const gateWage = function (baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
};

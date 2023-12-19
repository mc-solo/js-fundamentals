'use strict';

// We work for a company that workd on a smart home thermometer. Our most recent task is this: "Given an array of temps of one day, compute the temperature amplitude. Keep in mind that sometimes there might be a sensor error".

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1. Understand the problem
//      What's temp amplitude?
//      How to compute max and min temps?
//      What is a sensor error and how to ignore it?

// 2.   Breaking up into sub-problems

// how to ignore errors
// find min and max
// subtract the min value from tha max value

// implemeting the maximum value

let max = temperatures[0];

for (let i = temperatures[1]; i < temperatures.length; i++) {
  if (temperatures[i] > max) {
    max = temperatures[i];
  }
}
console.log(max);

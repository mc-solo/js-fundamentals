'use strict';

// object destructuring
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Frenze, Italy',
  catagories: ['Italian', 'Pizzeria', 'Vegerarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },

    fri: {
      open: 11,
      close: 23,
    },

    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function ({ starterIndex, mainIndex }) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// get some properties from the object
const { name, openingHours, catagories } = restaurant;

console.log(name);
console.log(openingHours);

// but what if i want different variable name
const { name: rName, openingHours: hours } = restaurant;
console.log(rName);
console.log(hours);

// using the concept of destructuring for function parameters

// invoking the function from the object with those arguments
restaurant.order({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const arr = [1, 2, 3];
const badNewArr = [arr[0], arr[1], 2.5]; //doing the manual work to import the value of elemetns from the original array

//but using  the spread operator

const newArr = [5, 4, ...arr]; // ... is called the spread operator
console.log(newArr);

// we can use this operator whenever we want to get individual elements for the array for ex

console.log(...arr);

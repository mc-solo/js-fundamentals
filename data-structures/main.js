'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Frenze, Italy',
  catagories: ['Italian', 'Pizzeria', 'Vegerarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

// Destructuring an array

const arr = [1, 3, 5];

console.log(arr);
// let's destructre this array: when js sees sq.brackets it automatically know to do destructuring

const [x, y, z] = arr;
console.log(x, y, z);

const [first, second] = restaurant.catagories;
console.log(first, second); //takes the first two values from the array

// but what if i want to take out the 3rd value, how would i do that???
// let's try with this method

const [, , third] = restaurant.catagories; //ommiting the var name will do it
console.log(third);

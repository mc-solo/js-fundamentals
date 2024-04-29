'use strict';

// getting used to factory functions
// these are functions that are used to create objects and retrun them rather than using object literals
// example

function createPerson(name, age) {
  const person = {
    name,
    age,
    sayHello: function () {
      console.log(
        `Hello ${this.name}, why are you still ${this.age} years old ?`
      );
    },
  };
  return person;
}
// so the above was one simple instance to show that objects can be created using the facrotory functions
// and we created the object mc_solo from that

const mc_solo = createPerson('Wondwosn', 21);
mc_solo.sayHello();

// let's try giving some behaviour to the newly created object

mc_solo.job = 'developer';

// ///////////////////////////////////////////////////////////////////////////////////////////

// Now let's take a close look at constructor functions
// they are used to create and initialize an object and basically they are function, a special ones

function Vehicle(make, model, year) {
  // defining object properties
  this.make = make;
  this.model = model;
  this.year = year;

  //  defining object behaviour
  this.startEngine = function () {
    console.log('Engine started');
  };

  this.shiftGear = function () {
    console.log('Gear shift detected');
  };
}

const car1 = new Vehicle('Toyota', 'Camry', 2023);

console.log(car1, typeof car1);

// ex. trigerring the engine

const engineState = car1.startEngine();
console.log(engineState);

// //////////////////////////////////////////////////////////////////////////////////////////

console.log(mc_solo.job);
// Encapsulation
// The best functions are the one with no parameters. -Someone

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

// prodecural style -functions with so many parameters

const gateWage = function (baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
};

// object oriented style -iss way better

const employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 10,

  gateWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};

employee.gateWage();

// ///////////////////////////////////////////////////////////////////////////////////////////////////

// construcror function to create the Person Object
function Person(name, age) {
  let _name = name; //private var
  let _age = age; //private var

  // public methods to access those private vars
  return {
    getName: () => _name,
    getAge: () => _age,
    celebrateBirthDay: () => {
      _age++;
      console.log(`Happy Birthday! ${_name} is now ${_age} years old.`);
    },
  };
}

// Creating a person object using encapsulation

const john = Person('John', 21);

// oop refresher after a long period of time

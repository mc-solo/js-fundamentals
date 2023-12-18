"use strict";

const person = {
  firstName: "W",
  lastName: "A",
  birthYear: 2002,
  calcAge: function (birthYear) {
    return 2023 - this.birthYear;
  },
};

const age = person.calcAge(person.birthYear);
console.log(age);

// the 'this' keyword

const myObject = {
  property1: "value1",
  method1: function () {
    console.log(this.property1);
  },
};

myObject.method1();

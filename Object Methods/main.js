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

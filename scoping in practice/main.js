'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName); //looks the varaible in the next scope-works

  function printAge() {
    const output = `${firstName}, You'are ${age} years old`;
    console.log(output);

    if (1991 <= birthYear <= 1996) {
      const str = `oh and you're a millenial, ${firstName}`;
      console.log(str);
    }
  }
  printAge();
  return age;
}

const firstName = 'Wondwosen';
calcAge(2023);

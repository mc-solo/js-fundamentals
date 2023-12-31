'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    console.log(firstName); //looks the varaible in the next scope-works


    function printAge() {
        const output = `You'are ${age} years old`
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = 'Wondwosen';
calcAge(2023)
 
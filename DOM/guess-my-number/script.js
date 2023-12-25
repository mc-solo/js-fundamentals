'use strict';

//the query selector
const message = document.querySelector('.message');

// changing the text content using the .textContent method
message.textContent = 'start guessing ';
console.log(message);

// let score = document.querySelector('.label-score');
// console.log(score);
// // score.textContent = 13.5;

// document.querySelector('.number').textContent = '14';
// document.querySelector('.score').textContent = '9'

// let num = document.querySelector('.number');
// let value = num.value = 47;
// console.log(value);

const guess = document.querySelector('.guess');

const secretNumber = Math.trunc((Math.random() * 20) + 1);
document.querySelector('.number').textContent= secretNumber;
console.log(secretNumber);

// click event handling
const button = document.querySelector('.check');

button.addEventListener('click', function () {
  const value = Number(guess.value)

if(!value) {
    message.textContent = '⛔ Not a valid number';
}
else if(value === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number'
}




});

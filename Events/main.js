'use strict';

const view = document.querySelector('#view2');
const div = view.querySelector('div');
const h2 = div.querySelector('h2');

// console.log(view);
// console.log(div);
console.log(h2);


const doSomething = function () {
    alert('Doing something...')
}

h2.addEventListener('click', doSomething); //attaches an event listener for h2
h2.removeEventListener('click', doSomething); //removes the event listener for h2

h2.addEventListener('click', function(event) {
    console.log('event.target');
    event.target.textContent = 'Clicked'
})
  
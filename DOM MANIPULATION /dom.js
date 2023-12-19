// finding elements form the DOM
let heading = document.getElementById('primary-header');
console.log(document.getElementById('primary-header'));

let h1 = document.getElementsByTagName('h1');
console.log(document.getElementsByTagName('h1'));

let item = document.getElementsByClassName('list-item-group');
console.log(document.getElementsByClassName('list-item-group'));

// changing HTML elements
heading.textContent = 'New h1 content';

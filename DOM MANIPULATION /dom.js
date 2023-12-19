// GET ELEMENT BY ID

let header = document.getElementById('primary-header');
header.textContent = 'Listings Here';
// header.textContent = 'Your Items Here';

console.log(header.textContent);

// GET ELEMENTS BY CLASS
let items = document.getElementsByClassName('list-item-group');
console.log(items);

// we just can't change the whole array at a time, instead we do this
for (let i = 0; i < items.length; i++) {
  console.log(items[i].textContent);
}

items[2].textContent = 'Second item of the list';

// GET ELEMENTS BY TAG NANE

let lists = document.getElementsByTagName('li');

for (let i = 0; i < lists.length; i++) {
  lists[i].style.backgroundColor = '#333';
  lists[i].style.color = 'white';
}

// parent object of all things in js is window
// there's nothing above the window element in the context of brwoser i mean

// Object Literal
const book1 = {
  title: 'Book One',
  author: 'John Doe',
  year: '2024',
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
// object method
// console.log(book1.getSummary());

// getting keys and values from an object
// console.log(Object.keys(book1));
// console.log(Object.values(book1));

// Constructor
function Book() {
  console.log('Book instantiated...');
}

// Instantiate an object
const page1 = new Book();
// console.log(page1);

const type = typeof page1;
console.log(`type of page1 is ${page1}`);

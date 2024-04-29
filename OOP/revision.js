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

// come up with some examples
function Student(name, college, department) {
  this.name = name;
  this.college = college;
  this.department = department;
}

// in this case mc_solo is a new instance of Student
const mc_solo = new Student();
mc_solo.name = 'Wondwosen';
mc_solo.age = '21';
mc_solo.department = 'ComputerScience';

console.log(mc_solo);

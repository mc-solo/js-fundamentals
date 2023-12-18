const person = {
  firstName: "Wondwosen",
  lastName: "Asegid",
  age: 21,
  job: "Blockchain Developer",
};

// order doesn't matter for objects
console.log(person);

console.log(); //blank space

// getting a property form an object
console.log(person.job); //dot notation
console.log(person["lastName"]); //bracket notaion

const nameKey = "Name";

// the bracket notaion is cool when we want to compute the property name from other expression
console.log(person["first" + nameKey]);
console.log(person["last" + nameKey]);

// const interestedIn = prompt(
//   "what do you wanna know about me? choose between name, job, age"
// );

person.location = "Ethiopia";
person.email = "wondwosen.asegid@gmail.com";
console.log(person);

const fruits = ["apple", "orange", "bannana"];
fruits.push("grape");
fruits.unshift("papaya");

console.log(fruits.length, fruits);

//  the splice method

fruits.splice(1, 1);
console.log(fruits.length, fruits);

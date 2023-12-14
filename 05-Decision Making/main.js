// if-else statements
const x = 10;

if (x >= 4) {
  console.log("x is greater than or equal to 10");
} else {
  console.log("x is less than 10");
}

const age = 20;
const isOldEnough = age >= 18;
console.log(typeof isOldEnough);

if (isOldEnough) {
  console.log("You can get a driving license");
} else {
  console.log(`You're under age to get your driving license`);
}

//Switch Statements
const os = "linux";

switch (os) {
  case "mac-os-X":
  case "linux":
    console.log("Still better than windwos");
    console.log("Best you can use for free");
    break;

  case "windows":
    console.log("Shitty os ever. Use @ your risk");
    break;
  default:
    console.log("You aint got an OS, consider writing one");
}

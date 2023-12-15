const hasDrivingLicence = true;
const hasGoodVison = true;

console.log(hasDrivingLicence && hasGoodVison);

console.log(false || true); //or logical operator
console.log(false && false); //and logical operator

console.log(!false); //not operator

const shouldDrive = hasDrivingLicence && hasGoodVison;

if (shouldDrive) console.log("You can drive");
else console.log("Someone else should drive for you");

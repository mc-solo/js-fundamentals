"use strict";

const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function (mass, height) {
    const BMI = this.mass / this.height ** 2;
    return console.log(BMI);
  },
};

const Mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function (mass, height) {
    const BMI = this.mass / this.height ** 2;
    return console.log(BMI);
  },
};

Mark.calcBMI();
John.calcBMI();

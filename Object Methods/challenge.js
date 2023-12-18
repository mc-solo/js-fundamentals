"use strict";

const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return console.log(this.BMI);
  },
};

const Mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return console.log(this.BMI);
  },
};

Mark.calcBMI();
John.calcBMI();

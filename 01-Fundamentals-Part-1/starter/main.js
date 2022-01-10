// Coding Challenge #1

const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

function getBMI(mass, height) {
  const bmi = mass / height ** 2;
  return bmi;
}

const mark = getBMI(markWeight, markHeight);
const john = getBMI(johnWeight, johnHeight);

// Coding Challenge #2

if (mark > john) {
  //   console.log(`Mark's BMI (${mark}) is higher than John's (${john})`);
} else {
  //   console.log(`Johns's BMI (${john}) is higher than Mark's (${mark})`);
}

// console.log(mark);
// console.log(john);

// Coding Challenge #3
const dolphins = [96, 108, 89];
const koalas = [88, 91, 110];

const dolphinsaverage =
  dolphins.reduce((prev, curr) => prev + curr) / dolphins.length;
console.log(dolphinsaverage);

const koalasaverage =
  koalas.reduce((prev, curr) => prev + curr) / koalas.length;
console.log(koalasaverage);

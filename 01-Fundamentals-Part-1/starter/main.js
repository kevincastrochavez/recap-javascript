// Coding Challenge #1

// const markWeight = 78;
// const markHeight = 1.69;

// const johnWeight = 92;
// const johnHeight = 1.95;

// function getBMI(mass, height) {
//   const bmi = mass / height ** 2;
//   return bmi;
// }

// const mark = getBMI(markWeight, markHeight);
// const john = getBMI(johnWeight, johnHeight);

// Coding Challenge #2

// if (mark > john) {
//   console.log(`Mark's BMI (${mark}) is higher than John's (${john})`);
// } else {
//   console.log(`Johns's BMI (${john}) is higher than Mark's (${mark})`);
// }

// console.log(mark);
// console.log(john);

// Coding Challenge #3
// const dolphins = [96, 108, 89];
// const koalas = [88, 91, 110];

// const dolphinsaverage =
//   dolphins.reduce((prev, curr) => prev + curr) / dolphins.length;
// console.log(dolphinsaverage);

// const koalasaverage =
//   koalas.reduce((prev, curr) => prev + curr) / koalas.length;
// console.log(koalasaverage);

// Coding Challenge #4

// const percentage = 0.15;
// function calculateTip(subtotal) {
//   const amount =
//     subtotal > 50 && subtotal < 300 ? subtotal * percentage : subtotal * 0.2;
//   const total = amount + subtotal;

//   return total;
// }

// const billOne = calculateTip(275);
// const billTwo = calculateTip(40);
// const billThree = calculateTip(430);

// console.log(billOne);
// console.log(billTwo);
// console.log(billThree);

// Coding Challenge #5

const dolphins = [44, 23, 71];
const koalas = [65, 54, 49];

const calcAverage = (array) => {
  const average = array.reduce((prev, curr) => prev + curr) / array.length;

  return average;
};

const dolphinsAverage = calcAverage(dolphins);
const koalasAverage = calcAverage(koalas);

console.log(dolphinsAverage);
console.log(koalasAverage);

const checkWinner = (averageOne, averageTwo) => {
  if (averageOne > averageTwo) {
    console.log(`Dolphins win (${averageOne} vs (${averageTwo})`);
  } else {
    console.log(`Koalas win (${averageTwo} vs ${averageOne})`);
  }
};

checkWinner(dolphinsAverage, koalasAverage);

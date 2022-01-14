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

// const dolphins = [44, 23, 71];
// const koalas = [65, 54, 49];

// const calcAverage = (array) => {
//   const average = array.reduce((prev, curr) => prev + curr) / array.length;

//   return average;
// };

// const dolphinsAverage = calcAverage(dolphins);
// const koalasAverage = calcAverage(koalas);

// console.log(dolphinsAverage);
// console.log(koalasAverage);

// const checkWinner = (averageOne, averageTwo) => {
//   if (averageOne > averageTwo) {
//     console.log(`Dolphins win (${averageOne} vs (${averageTwo})`);
//   } else {
//     console.log(`Koalas win (${averageTwo} vs ${averageOne})`);
//   }
// };

// checkWinner(dolphinsAverage, koalasAverage);

// Coding Challenge #6

// const calcTip = (bill) => {
//   const billCost = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

//   return billCost;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// const total = tips.map((tip, index) => {
//   return tip + bills[index];
// });

// console.log(total);

// Coding Challenge #7

// const mark = {
//   fullName: 'Mark MIller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//   },
// };

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;

//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi);
// console.log(john.bmi);

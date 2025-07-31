console.log("SCRIPT JS");
// const {sumOfTwo, xy} = require("./calculateTwo/sumOfTwo");
// const divOfTwo = require("./calculateTwo/divOfTwo");
// const mulOfTwo = require("./calculateTwo/mulOfTwo");
const { sumOfTwo, mulOfTwo, divOfTwo, xy } = require("./calculateTwo");

/// calculator

// function sumOfTwo(a, b) {
//   console.log(a+b);
//   return a+b;
// }

// function mulOfTwo(a, b) {
//   console.log(a*b);
//   return a*b;
// }

// function divOfTwo(a, b) {
//   console.log(a/b);
//   return a/b;
// }

// console.log("xy:", xy);
sumOfTwo(10, 20);
mulOfTwo(10, 20);
divOfTwo(40, 10);
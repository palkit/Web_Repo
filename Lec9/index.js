console.log("SCRIPT JS");
// const {sumOfTwo, xy} = require("./calculateTwo/sumOfTwo");
// const divOfTwo = require("./calculateTwo/divOfTwo");
// const mulOfTwo = require("./calculateTwo/mulOfTwo");
// import { sumOfTwo, mulOfTwo, divOfTwo, xy } from "./calculateTwo/index.js";

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
// sumOfTwo(10, 20);
// mulOfTwo(10, 20);
// divOfTwo(40, 10);

// how iife works 
// (function(module, require){
//   require("./path");
//   function sumOfTwo(a, b){
//     console.log(a+b);
//     return a+b;
//   }
//   module.exports = {sumOfTwo}
// }())

// synchronous

var a = 2;
var b = 30;

function call() {
  console.log("call Function")
}
console.log(a);
call();
console.log(b)

// asynchronous

setTimeout(() => {
  console.log("this is set timeout 1");
}, 2000);

setTimeout(() => {
  console.log("this is set timeout 2");
}, 2000);

setTimeout(() => {
  console.log("this is set timeout 3");
}, 3000);

setTimeout(() => {
  console.log("this is set timeout 4");
}, 4000);

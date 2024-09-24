let { calculateSum, division } = require("./first"); // in CJS file can be read with the extestion mention
// let { sum } = require("./calculate/addition");
// let { sub } = require("./calculate/subtracton");
let { sum, sub } = require("./calculate/index");
const data = require("./calculate/data.json");
// import { calculateSum, division } from "./first.js"; //in ES6 you have to mention the extention otherwise it will give error

let a = 20;
let b = 30;

// z = 10; // this auto global will through error in ES6 module because that by default run in strict mode

calculateSum(a, b);
division(a, b);
sum(a, b);
sub(a, b);
console.log(data);
console.log(JSON.stringify(data));

// require("./path")
// All the code of the module is wrapped inside a function (IIFE)
// Immediatly invoked function expression
(function IIFE() {
  // all the code of module runs inside here
})();
console.log(__filename);

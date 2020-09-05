const mod1 = require("./my.module1");
const mod2 = require("./my.module2");

const mod3 = require("./my.module3");

let sumtotal = mod3.sum(10, 20);
console.log(sumtotal);

let diffresult = mod3.diff(20, 10);
console.log(diffresult);

console.log("Hello world");
console.log(mod1);
//console.log(mod2);


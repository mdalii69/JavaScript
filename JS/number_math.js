//Number
const score = 400
console.log(score);  //400
const balance = new Number(100)
console.log(balance);  //[Number: 100]

console.log(balance.length);  //undefined
console.log(balance.toString());  //Converted to String
console.log(balance.toString().length);  //3
console.log(balance.toFixed(2)); //100.00
console.log("\n");

//Math
console.log(Math);
console.log(Math.abs(-4));  //(4)
console.log(Math.round(4.6)); //Rounds (5)
console.log(Math.ceil(4.2));  //Give top Value (5)
console.log(Math.floor(4.9));  //Give bottom value(4)
console.log(Math.min(2,5,3,6,4));  //(2)
console.log(Math.max(2,5,3,6,4));  //(6)

console.log(Math.random()); //Gives random value between 0 and 1

console.log(Math.floor(Math.random()*10) + 1);  //Customizing range between 1 and 10

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max -  min + 1)) + min )  //Between 10 and 20


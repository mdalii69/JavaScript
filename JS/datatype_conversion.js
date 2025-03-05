//Number Conversion: Number()
let score = "33"
console.log("Number conversion:");
console.log(typeof score);         //string
let valueInNumber = Number(score)
console.log(typeof valueInNumber); //number
console.log(valueInNumber);        //33
console.log("\n");
//"" => 0
//"33" => 33
//"33abc" => NaN
//true => 1
//false => 0

//Boolean Conversion: Boolean()
let isLoggedIn = 1
let booloeanIsLoggedIn = Boolean(isLoggedIn)
console.log("Boolean Conversion:");
console.log(booloeanIsLoggedIn);   //true
console.log("\n");
//"" => false
//"abc" => true
//1 => true
//0 => false

//String Conversion: String()
let someNumber = 33
let stringNumber = String(someNumber)
console.log("String Conversion:");
console.log(typeof stringNumber);  //string
console.log("\n");


// Stack (Primitive),
let name = "xyz"

let anotherName = name
anotherName = "abc"

console.log("Stack Memory:");
console.log(name);         //xyz
console.log(anotherName);  //abc
console.log("\n");


// Heap (Non-Primitive)
let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "xyz@gmail.com"

console.log("Heap Memory:")
console.log(userOne.email);  //xyz@gmail.com
console.log(userTwo.email);  //xyz@gmail.com
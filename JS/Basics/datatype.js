//Primitive Datatypes
console.log(typeof "John Doe"); //Returns "string"
console.log(typeof 3.14);  //Returns "number"
console.log(typeof true);  //Returns "boolean"
console.log(typeof 234563263762362536275376253276343423n);  //Returns bigint
console.log(typeof undefined);  //Return "undefined"
console.log(typeof null);  //Returns "object" (kind of a bug in JavaScript)
console.log(typeof Symbol("symbol")); //Return Symbol

//Non-Primitive Datatypes
var obj1 = {  //Collection of data in key-value pairs
    x: 43,
    y: "Hello world!",
    z: function() {
        return this.x;
    }
}

var array1 = [5, "Hello", true, 4.1];  //Collection of data as an ordered list

console.log(obj1);
console.log(array1);

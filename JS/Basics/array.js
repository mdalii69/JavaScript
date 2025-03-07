// Array
const myArr = [1,2,3,4,5]
const myArr2 = new Array(2,3,4)

console.log(myArr[0]);  //1
console.log(myArr2[0]);  //2

//Array Methods
myArr.push(6)
console.log(myArr);  //[1,2,3,4,5,6]

myArr.pop();
console.log(myArr);  //[1,2,3,4,5]

myArr.unshift(9);
console.log(myArr);  //[9,1,2,3,4,5]

myArr.shift(9);
console.log(myArr);  //[1,2,3,4,5]

console.log(myArr.includes(9));  //false

console.log(myArr.indexOf(9));  //-1

const newArr = myArr.join()
console.log(myArr);  //[ 1, 2, 3, 4, 5 ]
console.log(newArr); // 1,2,3,4,5
console.log(typeof newArr);  //string

// SLICE and SPLICE
let letters = ["a", "b", "c", "d", "e"];
// slice - creates a new array (non-destructive)
let subset = letters.slice(1, 4);
console.log(subset); // ["b", "c", "d"]
console.log(letters); // ["a", "b", "c", "d", "e"] (unchanged)
// splice - modifies original array (destructive)
let removed = letters.splice(1, 2, "x", "y");
console.log(removed); // ["b", "c"]
console.log(letters); // ["a", "x", "y", "d", "e"]

const marvelHeros = ["Iron Man","Captain America","Thor"]
const dcHeros = ["Superman", "Batman", "Flash"]

// PUSH METHOD
// marvelHeros.push(dcHeros);
// console.log(marvelHeros);  // ['Iron Man','Captain America','Thor',[ 'Superman', 'Batman', 'Flash' ]]
// console.log(marvelHeros[3][1]);  //Batman

// CONCAT METHOD
// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);  // ['Iron Man','Captain America','Thor','Superman','Batman','Flash']


//SPREAD OPERATOR (Modern Method)
const allHeros  = [...marvelHeros, ...dcHeros]
console.log(allHeros)  //['Iron Man','Captain America','Thor','Superman','Batman','Flash']

// FLATENING ARRAY
const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray)  //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// CHECKING ARRAY
console.log(Array.isArray("Megatron")); //false

// MAKE ARRAY

//from() method
console.log(Array.from("Megatron"));  //['M', 'e', 'g','a', 't', 'r','o', 'n']
// from() method don't convert Object into Array

//of() method
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));  //[ 100, 200, 300 ]




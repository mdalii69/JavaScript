const name = "hello"
const repoCount = 50
//Older way
console.log(name + repoCount + " Value");

//Backtick (Modern Way)
console.log(`Hey my name is ${name}, and repo count is ${repoCount}`);

const gameName = new String('Megatron')

//String Operations
console.log(gameName[0]);  //M
console.log(gameName.__proto__);  //{}
console.log(gameName.length);  //8
console.log(gameName.toUpperCase());  //MEGATRON
console.log(gameName.charAt(3));  //a
console.log(gameName.indexOf('a'));  //3
console.log(gameName.substring(-7,4)); //Substring don't take negative parameter
console.log(gameName.slice(-7,4)); //works fine
console.log(gameName.replace('M','G'));  //Gegatron
console.log(gameName.includes('M'));  //true

const newString = "  string   "
console.log(newString.trim());   //Removes whitespaces (string)

const anotherString ="abc-xyz-pqr"
console.log(anotherString.split('-')); //splits string based on '-' ['abc','xyz','pqr']

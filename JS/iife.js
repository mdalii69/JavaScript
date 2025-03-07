// Immediately Invoked Function Expressions (IIFE)
//(function definition)(execution)
//Helps in global scope pollution in IIFE

//Named IIFE
(function hello(name){
    console.log(`Hello, ${name}`);
})('Ali');  //semicolon is necessary for ending IIFE

//Unnamed IIFE
( (name) => {console.log(`Bye, ${name}`);} )('Ali');




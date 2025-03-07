function add(number1,number2){  //(parameters)
    console.log(number1+number2);
}
const result = add(3,4);   //7   (arguments)
add(3,"4"); //34
add(3,"a"); //3a
add(3, null); //3
console.log("Result:",result);  //Result: undefined



function addTwo(number1,number2){ 
    let result = number1+number2;
    return result;
}
const resultTwo = addTwo(3,4);
console.log("Result:",resultTwo);  //Result: 7



function loginUserMessage(username = "Tony"){ //Default value
    if(!username){  //(username === undefined)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Ali")); //Ali just logged in
console.log(loginUserMessage()); //Tony just logged in



//REST OPERATOR
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,600)); //[ 500, 600 ]  (val1:200, val2:400)



//Function with Object
const user = {
    username: "Megatron",
    age: 21
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}
handleObject(user); //Username is Megatron and age is 21



//Function with Array
const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    console.log(getArray[1])
}
returnSecondValue(myNewArray);  //400
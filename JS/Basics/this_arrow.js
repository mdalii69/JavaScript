// this refers to current context
const user = {
    username: "Megatron",
    age: 21,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website!`);
        // console.log(this);
    }
}
user.welcomeMessage()  //Megatron, welcome to website!
user.username = "Tony Stark"
user.welcomeMessage()  //Tony Stark, welcome to website!

// console.log(this);

// function hello(){
    // let username = "Megatron"
    // console.log(this.username);    //undefined (can't use in Functions)
// }
// hello();


//Arrow Function
// const hello = () => {
//     let username = "Megatron"
//     console.log(this.username);  //undefined
// }
// hello()

//BASIC ARROW FUNCTION
const add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(3,4));  //7

//IMPLICIT ARROW FUNCTION
const addTwo = (num1, num2) => (num1 + num2);
console.log(addTwo(3,4));  //7  (Working Same as basic arrow function)

//OBJECT WITH ARROW
const addThree = (num1, num2) => ({username: "Megatron"});
console.log(addThree(3,4));  //{ username: 'Megatron' }



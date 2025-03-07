// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Ali",
    "full name": "Mohammad Ali",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "xyz@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email);    //xyz@gmail.com
console.log(JsUser["email"]); //xyz@gmail.com (Better way)
// console.log(JsUser."full name");  ERROR
// console.log(JsUser.full name);  ERROR
console.log(JsUser["full name"]);  //Mohammad Ali
console.log(JsUser[mySym]);  //mykey1

//FREEZE
// JsUser.email = "xyz@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "xyz@deepseek.com"
// console.log(JsUser.email);  //xyz@chatgpt.com

//Function USE
JsUser.greeting = function(){
    console.log("Hello World!");
}
JsUser.greetingTwo = function(){
    console.log(`Hello World!, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// SINGLETON OBJECT
// const tinderUser = new Object()

//NON-SINGLETON OBJECT
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Megatron"
tinderUser.isLoggedIn = false
console.log(tinderUser);  //{ id: '123abc', name: 'Megatron', isLoggedIn: false }

// NESTED OBJECTS
const regularUser = {
    email: "mail@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Mohammad",
            lastName: "Ali"
        }
    }
}
console.log(regularUser.fullname?.userfullname.lastName);  //Ali

//OBJECT ASSIGN
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1,obj2}; //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({}, obj1, obj2); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj3 = {...obj1, ...obj2}  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3);

const users = [
    {
        id: 1,
        email: "x@gmail.com"
    },
    {
        id: 2,
        email: "y@gmail.com"
    }
]
console.log(users[1].email); //y@gmail.com

//OBJECT KEYS & VALUES
console.log(tinderUser); //{ id: '123abc', name: 'Megatron', isLoggedIn: false }
console.log(Object.keys(tinderUser));  //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  //[ '123abc', 'Megatron', false ]
console.log(Object.entries(tinderUser));  //[ [ 'id', '123abc' ], [ 'name', 'Megatron' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //true

//DESTRUCTURING
const course = {
    coursename: "Thermodynamics",
    price: "Priceless",
    courseInstructor: "Tony Stark"
}
const {courseInstructor: instructor} = course
console.log(instructor) //Tony Stark


// JSON API
// {
//     "name": "Ali",
//     "age": 21,
// }

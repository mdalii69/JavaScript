let myDate = new Date()
console.log(myDate.toString());  //Thu Mar 06 2025 07:01:49 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());  //Thu Mar 06 2025
console.log(myDate.toLocaleString());  //3/6/2025, 7:01:49 AM
console.log(typeof myDate);  //object

let  myCreatedDate = new Date(2023,0,23,5,3)
console.log(myCreatedDate.toDateString());  //Mon Jan 23 2023
console.log(myCreatedDate.toLocaleString());  // (1/23/2023, 5:03:00 AM)

let anotherDate = new Date("01-14-2023")
console.log(anotherDate.toLocaleString());  // (1/14/2023, 12:00:00 AM)

let myTimeStamp = Date.now()
console.log(myTimeStamp);  //1741244970476 (miliseconds)
console.log(myCreatedDate.getTime());  //1674450180000 (miliseconds)
console.log(Math.floor(Date.now()/1000)) //1741245071 (seconds)

let newDate = new Date()
console.log(newDate);  //2025-03-06T07:17:12.301Z
console.log(newDate.getMonth() + 1);  //3
console.log(newDate.getDate());  //6

console.log(newDate.toLocaleString('default',{
    timeZone: "Asia/Kolkata", 
    hour12: true
}))  // (3/6/2025, 12:47:12 PM)





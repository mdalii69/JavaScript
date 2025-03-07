// LOOPS

//for loop
for (let i = 0; i <= 10; i++) {
    if (i === 5) console.log("5 is best"); 
    console.log(i); // 0 to 10
}

//Nested for loop
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i*j}`);
    }
}

//while loop
let score = 5;
while (score < 10) {
  console.log(score); // 5-9
  score++;
}

//do-while loop
let marks = 11;
do {
  console.log(marks); // 11 (runs once)
} while (marks <= 10);

//for-of loop
const arr = [1, 2, 3];
for (const num of arr) {
  console.log(num); // 1, 2, 3
}

const greeting = "Hello";
for (const char of greeting) {
  console.log(char); // H, e, l, l, o
}

//for-in loop
const obj = { js: "JavaScript", cpp: "C++" };
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`); // js: JavaScript, cpp: C++
}

//-------------------------------------------------------------------------------------------------------------------------------

// ARRAY ITERATION METHODS

//forEach()
const coding = ["js", "ruby", "java"];
coding.forEach((item) => {
  console.log(item); // "js", "ruby", "java"
});

//filter()
const books = [
    { genre: "History", publish: 1999 },
    { genre: "Science", publish: 2011 }
  ];
const historyBooks = books.filter(book => book.genre === "History");

//map()
const nums = [1, 2, 3];
const squared = nums.map(num => num * num); // [1, 4, 9]

//reduce()
const sum = nums.reduce((acc, num) => acc + num, 0); // 6

//Method Chaining
const result = myNumers
  .map(num => num * 10)   // [10, 20, 30, ...]
  .filter(num => num > 40) // [50, 60, ...]
  .reduce((acc, num) => acc + num, 0); // Sum


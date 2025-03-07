//if-else if-else
const temp = 45;

if (temp > 40) {
  console.log("Temperature is greater than 40");
} else {
  console.log("Temperature is less than 40");
}
// Output: "Temperature is greater than 40"

if (temp < 50) {
  console.log("Less than 50");
}
// Output: "Less than 50"


//switch statement
const month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 3:
    console.log("March");
  case 4:
    console.log("April");
    break;
  default:
    console.log("Default case");
}
// Output: "March" (no break → falls through to "April")
// Output: "April"
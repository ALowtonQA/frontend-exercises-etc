"use strict";
// equals operator
console.log(1 == "1"); // returns true

console.log(1 == [1]); // returns true

console.log("1" == [1]); // returns true

// strictly equal operator
console.log(1 === "1"); // returns false

console.log(1 === [1]); // returns false

console.log("1" === [1]); // returns false

// Task 1
let age = 10;
if (age >= 18 && age <= 65) {
  console.log("Age is between 18 and 65");
} else if (age < 18) {
  console.log("Under 18");
} else {
  console.log("Age is over 65 or some other inavlid value");
}

// Task 2
let age2 = 100;
let result = (age2 >= 50)? "50+" : "Under 50";
console.log(result);

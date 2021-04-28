"use strict";
//#### Creating Objects ####
let car = new Object();

car["make"] = "Audi";
car["model"] = "A5";
car["carReg"] = "W8M8";

console.log(car)
console.log(car.make);
console.log(car.model);
console.log(car.carReg);

// Adding a new property to an object
car.numberOfDoors = 4;
console.log(car.numberOfDoors);

// Literal notation for object creation
let car2 = { make: "Audi", model: "A5", carReg: "W8M8" };

// Literal notation for array of objects
let carPark = [
    { make: "Audi", model: "A5", carReg: "AB12CDE" },
    { make: "hyundai", model: "i30", carReg: "AB11CDE" }
]

// Looping through array of objects
console.log("\n===FIRST LOOP===")
for (let i = 0; i < carPark.length; i++) {
    for (let key in carPark[i]) {
        console.log(`${key} : ${carPark[i][key]}`);
    }
}

// Another way
console.log("\n===Second loop===");
for(let i in carPark){
    for(let key in carPark[i]){
        console.log(`${key}: ${carPark[i][key]}`);
    }
}

// Another way
console.log("\n===Third loop===");
for(let obj of carPark){
    for(let key in obj){
        console.log(`${key}: ${obj[key]}`);
    }
}

//#### Creating Arrays ####
let a = Array();
let b = Array(10);
let c = Array("Tom","Dick","Harry");

// Literal notation for creating arrays
let cShortHand = ["Tom","Dick","Harry"];
let d = [1,2,3,4,5];

// Accessing arrays
let classRoom = ["","","",""];
classRoom[0] = "John";
classRoom[3] = "Simran";

console.log(classRoom[0]);
console.log(classRoom[2]); // Undefined
console.log(classRoom[3]);

// Array methods

//////////////////////////////////////////////////////////////////////
// sort() - Sorts the array using string comparisons by default.   //
//          So "25" is bigger than "100" as "2" > "1".            //
//          To solve this use a compare function. Example below: //
//////////////////////////////////////////////////////////////////
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Sort the elements 
fruits.reverse(); // Reverse the order
console.log(fruits)
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points)

// join() - Joins all the elements of the array into one string, using the supplied separator or a comma
console.log(fruits.join());
console.log(fruits.join("-"));

// push() - Adds a new element to the end of the array
// pop()  - Removes the last element from the array
fruits.push("lemon");
console.log(fruits);
fruits.pop();
console.log(fruits);

// unshift() -	Adds a new element to the beginning of the arrays
// shift()	- Remove the first element from the beginning of the array
fruits.unshift("lemon");
console.log(fruits);
fruits.shift();
console.log(fruits);

// Object Exercise
let darthVader = {
    allegiance: "Empire",
    weapon: "lightsaber",
    sith: true
    };

    console.log(darthVader);
    console.log(`Allegiance is to the ${darthVader.allegiance}`);
    console.log(`Weapon of choice is a ${darthVader.weapon}`);
    console.log(`Sith? : ${darthVader.sith}`);
    console.log(`Jedi? : ${darthVader.sith ? "false" : "true"}`);


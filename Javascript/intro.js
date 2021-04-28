"use strict";
// console.log
console.log("Hello World");
let str1 = "Welcome to JavaScript";
console.log(str1);
console.info(str1);
console.warn(str1);
console.error(str1);

// Variables
let car = "Audi A5";
let myObj = { str: "Just keep loggin you are nearly there", id:48576 };
console.info("My first car was an", car, ". The object is:", myObj);

// Template literals
let myCar = "Audi";
let myModel = "A5";
console.log(`my fav car is ${myCar} and the model is ${myModel}`);

// Styling console functions
let myTxt = "This could be useful!";
console.log("%cthis is a message with some CSS."+myTxt,"color: yellow; font-style: italic; background-color: blue; padding: 2px");

// Objects
let anotherObj = {a: 1, str: "hi"}
console.log(`Test: ${anotherObj.a} Str: ${anotherObj.str}`)

// ASI
let foo = 1
let bar
console.log(foo)
console.log(bar)

// Strict mode
// 'use strict';  at start of document

//####### Things you can't do in strict mode ########
// Using a variable without declaring it. E.g. x=10;
// Using an object with out declaring it. E.g. x={a:10,b:20};
// Deleting a variable or object.
// Deleting a function.
// Duplicating a parameter name.
// Octal numeric literal
// Octal escape characters
// Writing to a read-only properly.
// Writing to a get-only property.
//####### Keywords you can't use for variable names #######
// implements
// interface
// let
// package
// private
// protected
// public
// static
// yield

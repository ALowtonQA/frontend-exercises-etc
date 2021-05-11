"use strict";

async function foo() {
    const result1 = await new Promise((resolve) => setTimeout(() => resolve('1'), 2000));
    console.log("First result recieved")
    const result2 = await new Promise((resolve) => setTimeout(() => resolve('2'), 2000));
    console.log("Second result recieved")
}

let y = function () {
    console.log("I'm here!");
    foo();
    setTimeout(() => {
        console.log("I'm still here!")
    }, 1500);
}

y();
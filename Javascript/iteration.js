"use strict";
// For Loop
for (let i = 0; i < 9; i++) {
    console.log(`For Loop #${i+1}`)
}

// While Loop
let count = 0;
let loop = true;
while (loop) {
    console.log(`While Loop #${count+1}`);
    count++;
    loop = (count > 9)? false : true;
}

// Do While Loop
let count2 = 0;
let loop2 = false;
do {
    count2++
    console.log(`Do While Loop #${count2}`)
} while (loop2);

// Switch Case
let num = 1;
switch (num) {
    case 0: 
        console.log(`Switch Case: Value is 0`);
        break;
    case 1:
        console.log(`Switch Case: Value is 1`);
        break;
    default:
        console.log(`Switch Case: Value is something else`);
}

// Loops - task 1
for(let a = 100; a <= 200; a++) {
    console.log(`a = ${a}`);
}

// Loops - task 2
for (let a2 = 100; a2 <= 200; a2++) {
    if (a2 % 2 == 0) {
        console.log("-");
    } else {
        console.log("*");
    }
}

// Loops - task 3
for (let i = 1; i <= 10; i++) {
    for (let y = 1; y <= 10; y++) {
        console.log(i);
    }
}

// Switch Case - task 1
var now = new Date();
let day = now.getDay();
switch (day) {
    case 0:
        console.log(`It's Sunday`);
        break;
    case 6:
        console.log(`It's Saturday`);
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(`It's a weekday`);
        break;
    default:
        console.log(`Invalid range`);
        break;
}
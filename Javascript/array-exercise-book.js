"use strict";
let quote = ["I", "am", "your", "friend"];

console.log(quote[2]);
quote.pop();
quote.push("father");
console.log(quote);
quote.unshift("Luke");
console.log(quote);

let erroneousWord = "Luke";
let lukeIsHere = quote.find(x => x == erroneousWord);
let lukeIsAt;

if (lukeIsHere) {
    lukeIsAt = quote.findIndex(x => x == erroneousWord);
    quote[lukeIsAt] = "No";
}

let output = "";
for (let i = 0; i < quote.length; i++) {
    if (i == 0) {
        output += quote[0] + ", ";
    } else if (i == quote.length - 1) {
        output += quote[i] + "!";
    } else {
        output += quote[i] + " ";
    }
}
console.log(output);

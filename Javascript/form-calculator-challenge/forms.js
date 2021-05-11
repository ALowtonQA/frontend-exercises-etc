"use strict";
let addButton = document.querySelector("#addbtn");
let subButton = document.querySelector("#subbtn");
let mulButton = document.querySelector("#mulbtn");
let divButton = document.querySelector("#divbtn");
let clearButton = document.querySelector("#clearResults")
let valueFieldOne = document.querySelector("#valueOne");
let valueFieldTwo = document.querySelector("#valueTwo");
let resultField = document.querySelector("#resultField");
let resultsArea = document.querySelector("#resultsArea");

const addToResults = (num1, num2, operator, result) => {
    // console.log("DEBUG: I'm here")
    const p = document.createElement("p");
    const text = document.createTextNode(`${num1} ${operator} ${num2} = ${result}`);
    p.appendChild(text);
    resultsArea.appendChild(p);
}

const performCal = (event) => {
    let calc = event.target.id;
    let num1 = Number.parseInt(valueFieldOne.value);
    let num2 = Number.parseInt(valueFieldTwo.value);
    let result;
    switch(calc) {
        case "addbtn":
            result = num1 + num2;
            resultField.value = result;
            addToResults(num1, num2, "+", result)
            break;
        case "subbtn":
            result = num1 - num2;
            resultField.value = result;
            addToResults(num1, num2, "-", result)
            break;
        case "mulbtn":
            result = num1 * num2;
            resultField.value = result;
            addToResults(num1, num2, "x", result)
            break;
        case "divbtn":
            result = num1 / num2;
            resultField.value = result;
            addToResults(num1, num2, "/", result)
            break;
        default:
        resultField.value = "WTF?"
    }
}

const clearResults = () => {
    resultsArea.innerHTML = "";
}

addButton.addEventListener("click", performCal);
subButton.addEventListener("click", performCal);
mulButton.addEventListener("click", performCal);
divButton.addEventListener("click", performCal);
clearButton.addEventListener("click", clearResults);
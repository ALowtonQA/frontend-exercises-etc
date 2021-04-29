"use strict";

let logo = document.querySelector("#logoA");
let divA = document.querySelector(".addToMe");

logo.setAttribute("alt", "logo");
logo.setAttribute("width", "50%");
logo.setAttribute("height", "10%");

let newHeading = document.createElement("h1"); // <h1></h1>
let newText = document.createTextNode("We love JS!"); // Loose text "We love JS!"
newHeading.appendChild(newText); // <h1> We love JS! </h1>
divA.appendChild(newHeading); // <div><h1> We lose JS! </h1></div>


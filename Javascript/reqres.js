"use strict";

let resultArea = document.querySelector("#results");

axios
    .get("https://reqres.in/api/users")
    .then((response) => {
        displayResults(response.data.data);
    })
    .catch((err) => {
        console.error(err);
    });

const displayResults = (info) => {
    for (let entry of info) {
      const p = document.createElement("p");
      const text = document.createTextNode(`${entry.first_name} ${entry.last_name} ${entry.email}`); 
      p.appendChild(text);
      resultArea.appendChild(p);    }
}
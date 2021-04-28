"use strict";

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
    console.log(`Number of properties: ${Object.keys(darthVader).length}`);

    darthVader.children = 2;
    darthVader.childNames = ["Luke", "Leia"];

    console.log(`Number of children: ${darthVader.children}`);
    console.log(`First child's name: ${darthVader.childNames[0]}`);

    for (let key in darthVader) {
        console.log(`${key}: ${darthVader[key]}`);
    }

    darthVader.allegiance = "The light side";
    console.log(darthVader);
    delete darthVader.children;
    console.log(darthVader);

    let {allegiance, weapon, sith, childNames} = darthVader;
    console.log(allegiance);
    console.log(weapon);
    console.log(sith);
    console.log(childNames);

    darthVader = {};
    console.log(darthVader);



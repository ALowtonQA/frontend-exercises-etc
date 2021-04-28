"use strict";

// JSON structure
// Object keys must be strings
// Unordered set of key/value pairs
// Begins with { (left brace) and ends with } (right brace)
// Each key followed by a : (colon)
// Key/Value pairs separated by a , (comma)
// Values can only be string, number, another JSON, arrays, booleans and null
//    - i.e. values can't contain JavaScript expressions like functions and undefined.
//          - this is because JSON is a language-independet data-exchange format

let myJSONObject = {
    "searchResults": [
        {"productName": "Aniseed Syrup", "unitPrice": 10},
        {"productName": "Alice Mutton","unitPrice": 39}
    ]
};

// The JSON object is globally available

// The parse method takes a string and parses it into JavaScript objects
let obj = JSON.parse('{"name":"Adrian"}');
console.log(obj.name);

//The stringify method takes JavaScript objects and returns a string
let str = JSON.stringify({ name: "John" });

/////////////////////////////////////////////////////////////////////////////////////
//                             Overloaded methods
////////////////////////////////////////////////////////////////////////////////////
// JSON.parse( text )
//      - Converts a serialised JSON string into a JavaScript object.
// JSON.parse( text, translate )
//      - Uses a translation function to convert values or remove them entirely.
// JSON.stringify( obj )
//      - Converts an object into a serialised JSON string.
// JSON.stringify( obj, ["white", "list"])
//      - Serialises only a specific white list of properties.
// JSON.stringify( obj, translate )
//      - Serialises the object using a translation function.
// JSON.stringify( obj, null, 2 )
//      - Adds the specified number of spaces to the output, printing it evenly.
/////////////////////////////////////////////////////////////////////////////////
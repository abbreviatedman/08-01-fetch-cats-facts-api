// Lesson 09.01 Cat Facts API
// API (Application Programming Interface)  involves an app requesting data from a server
// data is returned to the add in JSON (JavaScript Object Notation)
// JSON is basically a JS object where all the keys are in double quotes
// The stringified object can travel over a network better, cuz it's just a string
// The app parses the string back into its JS object format which gives access
// to the individual properties
// go to https://catfact.ninja/fact and you will see a random cat fact in JSON format
// {
//   "fact": "Cats can be right-pawed or left-pawed.",
//   "length": 38
// }
// hold random cat fact loaded from API

// 0. Declare a var set equal to cat fact json:

// JSON vs. "regular JS object"
// JSON.stringify(obj);
// 1. Convert catFact json string to "regular" js object

// 2. convert the object to JSON for transmission over a network
//    tJSON.stringify(obj) takes an obj w properties as its arg
//    and returns the JSON version, where the keys are in double quotes
//    so save the returned JSOn to a variable

console.log("pet:");
// with the regular object, you have access to the properties
console.log("pet.name:");

// with the JSON, you do NOT yet have access to the properties
// because they are stringified
console.log("petJSON:"); // {"type":"bunny","name":"Thumper","age":3,"herbivore":true,"faveFoods":["carrots","blueberries","parsley"]}
console.log("petJSON.name:"); // undefined

// JSON.parse(JSONstring) works in the opposite direction of JSON.strinify(obj)
// you pass the parse() method a JSON string and get back a "regular" JS obj
// with properties that you can now access.  So, do the pet in reverse now:

console.log("petObj:"); // { type:"bunny", name:"Thumper", age:3, herbivore: true, faveFoods":["carrots","blueberries","parsley"] }

console.log("petObj.name:"); // Thumper
console.log("petObj.faveFoods[1]:"); // blueberries

// grab the DOM elems: the 2 btns and the output div.

// Add an event listener to run a displayCatFact function on click for the cat
// button.

// For our cat fact function, run a fetch function (built into browsers) to hit up the Cat Facts API. Then use the first .then callback to convert from JSON to a JS object and the second .then callback to put the cat fact on the DOM.


// LAB CHALLENGE: Make the "Get Dog Pic" button work
// clicking btn should display a diff random dog pic each time

// Dog Pic API Random Result:
// sample of random result from Dog API :
// {"message":"https:\/\/images.dog.ceo\/breeds\/keeshond\/n02112350_4005.jpg","status":"success"}

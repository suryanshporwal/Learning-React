// import intro,{i,myName} from "./util.js";
// name(as we named "intro" in this case) is required without curly braces for default imports

// console.log(intro);
// console.log(myName);

// But we can also import these in the form of a javascript object
import * as utils from "./util.js";
console.log(utils.default);
console.log(utils.myName);

// Btw we can also rename the items being imported from a file as
// import {myName as name} from "./util.js";
// this way now we can access the myName variable as name for this file

/**
 * 3) Special case: Just returning an object

// If you go for the shorter alternative explained in 
// 2) number => { 
  return number * 3;
}
// and you're trying to return a JavaScript object, you may end up with the following, 
// invalid code:

//     number => { age: number }; // trying to return an object

// This code would be invalid because JavaScript treats the curly braces as function body wrappers (not as code that creates a JS object).

// To "tell" JavaScript that an object should be created (and returned) instead, the code would need to be adjusted like this:

//     number => ({ age: number }); // wrapping the object in extra parentheses

// By wrapping the object and its curly braces with an extra pair of parentheses,
// JavaScript understands that the curly braces are not there to define a 
// function body but instead to create an object.
// Hence that object then gets returned.
 */

// objects and values

// Now about objects
// there are multiple ways to define an object in javascript

// One of them is
const user = {
  name: "suryansh",
  class: "S",
  intellect: "exceptionally high",
  greet: () => {
    console.log("YOOOO!!!!");
  },
};

console.log(user);
user.greet();

// Using class
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hi!");
  }
}

const user1 = new User("Albert", 38);
console.log(user1);

/// Arrays in JavaScript

const suryanshHobbies = [
  "chess",
  "gaming",
  "touchtyping",
  "astrology",
  "speedcubing",
  "psychology",
  "singing",
  "content creation",
  "coding",
];

console.log(suryanshHobbies[0]);

// push method
suryanshHobbies.push("rizzing");
console.log(suryanshHobbies[suryanshHobbies.length - 1]);

// finding index of an item
const index = suryanshHobbies.findIndex((item) => item === "speedcubing");

console.log(index);

// map function
// used for many of the items in react
// map allows us to modify every element in an array and returns a new array
let i = 0;
const editedHobbies = suryanshHobbies.map((item) => {
  return { name: item, val: i++ };
});

console.log(editedHobbies);

// Destructuring

// const firstName=editedHobbies[0];
// const lastName= editedHobbies[1];

// there is an easier way to do this

// will take first two elements and store them in defined variables
const [checkWhat, checkWhat2] = [];
console.log(checkWhat, checkWhat2); // will give undefined

const [firstName, lastName] = editedHobbies;
console.log(firstName, lastName);

// This destructuring can also be used for objects (not classes)

// won't work --> Why? because you need to use curly brackets
// const [name,val,noValue]=firstName;

// did something tricky, now the value will be name
// and name will be value
// so we can also define what variable stores what
const { name: val, val: name, noValue } = firstName;
console.log(name, val, noValue); // name prints 0 and val prints the name

// setItem() function
// works on localStorage
// stores the data id and the variable name(value is converted into string while storing))
// in browser itself

// wont work with node js
// localStorage.setItem('id',lastName.val);

// The spread operator

// if we do this-> is array of array with 2 elements->
// mergedHobbies=[suryanshHobbies,editedHobbies];

// But if we want to store it merged then we will use 3 dots ... <-- Spread Operator
const mergedHobbies = [...editedHobbies, ...suryanshHobbies];
console.log(mergedHobbies);

// Similarly , this can also be used for other objects also
const newHobby = {
  owner: "Hydrous",
  ...firstName,
};

// merged the firstName with the newHobby object
console.log(newHobby);

// Control Structures --> if else (yk)
// How to create overlay? <-- get input from browser like alert
// const pswd = prompt("password"); // prompt will open in browser and on entering will store in...

// for loop
for (const hobby of editedHobbies) {
  console.log(hobby.name);
}

// Using functions as variables

function handleTimeout() {
  console.log("Timed Out");
}

const handleTimeout2 = () => {
  console.log("Timed Out... again!");
};

setTimeout(handleTimeout, 2000);

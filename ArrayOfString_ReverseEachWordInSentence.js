//! Given an array of strings, reverse each word in the sentence

let str = "Welcome to India";

let revStr = str.split("").reverse().join("");
console.log(revStr);




//!another method

// let str = "Welcome to India";

// let revStr = revStrBySeperator(str, "");

// function revStrBySeperator(sampleInput, seperator) {
//   return sampleInput.split(seperator).reverse().join(seperator);
// }
// console.log(revStr);
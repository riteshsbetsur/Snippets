//! Given two strings, how can you check if the strings are anagram for each other

let str1 = prompt("Enter string 1");
let str2 = prompt("Enter string 2");


let a1 = str1.toUpperCase();
console.log(a1);

let a2 = str2.toUpperCase();
console.log(a2);


let b1 = a1.split("").reverse().join("");
console.log(b1);

let b2 = a2.split("").reverse().join("");
console.log(b2);

if (b1 == b2) {
      console.log("Its an Anagram");
} else {
      console.log("Its not an Anagram")
}


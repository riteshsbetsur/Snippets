//! How to sort a number

let arr = [10, 4, 20, 29, 36, 85, 2, 58, 12, 26, 5, 49];
let ascending = arr.sort((a, b) => a - b); //sorting in ascending order
console.log(ascending); // [2, 4, 5, 10, 12, 20, 26, 29, 36, 49, 58, 85]

let descending = arr.sort((a, b) => b - a); //sorting in ascending order
console.log(descending); //[85, 58, 49, 36, 29, 26, 20, 12, 10, 5, 4, 2]

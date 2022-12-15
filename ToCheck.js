//! To check if an array contains any element of another array

let arr1 = [1, 2, 34, 5, 6, 7, 8];
let arr2 = [1, 2, 3];

let result = arr1.some(ele => arr2.includes(ele));
console.log(result);
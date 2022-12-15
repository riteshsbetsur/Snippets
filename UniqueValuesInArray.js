//! How to find unique values in an array

let id = [10, 65, 32, 5, 76, 65, 2, 5];
let b = id.filter((ele, index, arr) => arr.indexOf(ele) == index);
console.log(b);

// let c = b.sort((c, d) => c - d);// after filtering, sorting in ascending order
// console.log(c)

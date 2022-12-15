//! How to find unique values from an array in sorted order

let id = [23, 45, 65, 36, 9, 21, 5, 4, 9, 3, 2, 45];

let b = id
  .filter((ele, index, arr) => arr.indexOf(ele) == index)
  .sort((a, b) => a - b);

console.log(b);

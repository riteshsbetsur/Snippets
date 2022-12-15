//! To find duplicate elements in an Array

//? Array filter()---- it takes 3 parameters : element, index & array.

let dupArray = [14, 2, 36, 22, 51, 14, 361, 4, 36];
let duplicates = dupArray.filter((ele, index, arr) => arr.indexOf(ele) !== index);
console.log(duplicates);





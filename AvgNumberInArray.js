//! To find average of the numbers in the numbered array

let empId = [2, 6, 5, 6, 36, 51, 25, 66, 56];

let totalCount = empId.reduce((a, b) => a + b, 0);

let arrLength = empId.length;

console.log(totalCount / arrLength);

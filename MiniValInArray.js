//! To find minimum value in numbered array

let emp = [10, 65, 5, 255, 10, 96, 2, 68];

// function minVal(arr) {
//       return arr.reduce(function (pre, val) {
//             return (pre < val ? pre : val);
//       })
// }

// console.log(minVal(emp));

//? Method 2

let brr = emp.sort((a, b) => b - a);
console.log(brr);
console.log(brr.pop());

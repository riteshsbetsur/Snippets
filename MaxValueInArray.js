//! To find max value in an array

let num = [5, 20, 366, 52, 9558, 45];

function maxVal(arr) {
      return arr.reduce(function (prev, curr) {
            return prev > curr ? prev : curr;
      })
}
console.log(maxVal(num));

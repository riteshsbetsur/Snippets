//! Count of duplicate values in array

let month = ["may", "April", "Feb", "Dec", "July", "Oct", "may", "Dec"];

let dupCount = month.reduce((obj, month) => {
  if (obj[month] == undefined) {
    obj[month] = 1;
    return obj;
  } else {
    obj[month]++;
    return obj;
  }
}, {});
console.log(dupCount);

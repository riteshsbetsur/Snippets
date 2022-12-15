//! To convert Uppercase the first character in a string array

let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

let updatedDays=[]
for (let day of days) {
      day = day.charAt(0).toUpperCase() + day.substring(1);
      console.log(day);
      updatedDays.push(day);
}
console.log(updatedDays);
//! Difference between Object.freeze() vs const

// const month = "july";
// month = "Feb";
// console.log(month);

let person = {
      name: "Ramesh",
}

Object.freeze(person);
person.name = "Hello World";
console.log(person);
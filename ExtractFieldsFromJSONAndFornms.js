//!  How to extract few fields from the given JSON oject and form a new array

let input = {
  emp: [
    {
      name: "Raja",
      id: 1,
      email: "test1@123",
    },
    {
      name: "Rani",
      id: 1,
    },
    {
      name: "Kumar",
      id: 1,
      email: "test2@123",
    },
    {
      name: "Kumari",
      id: 1,
      email: "test3@123",
    },
  ],
};

let op = input.emp.map(function (item) {
  let empObj = {
    name: item.name + item.id,
    email: item.email,
  };
  return empObj;
});
console.log(op);

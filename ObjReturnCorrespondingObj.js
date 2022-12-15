//! To filter a given object based on certain conditions and return the corresponding object

let input = {
  "emp": [
    {
      empId: 10,
      fName: "Raj",
      lName: "Kumar",
    },
    {
      empId: 25,
      fName: "Surya",
      lName: "K",
    }
  ]
}

let op = input.emp.filter(function (item) {
      return item.empId > 12 ? item : '';
});
console.log(op);

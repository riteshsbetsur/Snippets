//! Class Inheritance

class Car {
  constructor(model, name) {
    this.model = model;
    this.name = name;
  }
  start() {
    console.log(`Name of car : ${this.name}`);
  }
  end() {
    console.log("car stopped");
  }
}

class ElectricCar extends Car {
  dashboard() {
    console.log("child method");
  }

  start() {
    super.start();
    super.end();
    this.dashboard();
  }
}

let evCar = new ElectricCar("Tesla", "A320");
evCar.start();
console.log(evCar);

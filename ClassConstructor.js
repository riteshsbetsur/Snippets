//! Class constructor
class Car{
      constructor(model, name) {
            this.model = model;
            this.name = name;
      }
      start() {
            console.log(`Name of the car : ${this.name}`);
      }
}

bmw = new Car(20, 'BMW C3500');
bmw.start();



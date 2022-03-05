// test class with mocha assert example 
const assert = require("assert");

class Car {
  park() {
    return "stopped";
  }
  drive() {
    return "vroom";
  }
}

let car;

// create new instance of car
beforeEach(() => {
  car = new Car();
});

// test if string is equal
describe("Car", () => {
  it("can park", () => {
    assert.equal(car.park(), "stopped");
  });
  it("can drive", () => {
    assert.equal(car.drive(), "vroom");
  });
});

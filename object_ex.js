// let car = {
//   brand: "Red car",
//   yearMade: 2021,
//   startCar() {
//     alert("Start car");
//   },
// };

// console.log(car.brand);
// car.yearMade = 2020;

// console.log(car);

function User(name) {
  this.name = name;
  this.sayHi = function () {
    console.log("My name is " + this.name);
  };
}

let marcus = new User("Marcus");

console.log(marcus.sayHi());

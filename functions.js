// function showMessage(from, text = "Ingen text") {
//   alert(from + " " + text);
// }

// console.log(showMessage("Marcus"));

function sayHi2() {
  console.log("Hello");
}

let sayHi3 = () => {
  alert("Say hi, arrow function");
};

let sayHi = function () {
  alert("Hello again");
};

let multiply = (num1, num2) => num1 * num2;

setTimeout(() => {
  console.log("Hrj");
}, 10000);

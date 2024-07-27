// Variables ========================================
let firstnumber = document.querySelector("#firstnumber");
let lastnumber = document.querySelector("#lastnumber");
let result = document.querySelector(".result h1");

function onMinus(e) {
  e.preventDefault();
  let value = getFirstNumber() - getLastNumber();
  showResult(value);
}

function onDivide(e) {
  e.preventDefault();
  let value = getFirstNumber() / getLastNumber();
  showResult(value);
}

function onAverage(e) {
  e.preventDefault();
  let value = (getFirstNumber() + getLastNumber()) / 2;
  showResult(value);
}

function getFirstNumber() {
  return parseInt(firstnumber.value);
}

function getLastNumber() {
  return parseInt(lastnumber.value);
}

function showResult(value) {
  // 1 - If Nan, overwrite with 0
  if (value.toString() === "NaN") {
    value = 0;
  }

  // 2 - Update the DOM
  result.textContent = "Result: " + value;
}

document.querySelector("#minusButton").addEventListener("click", onMinus);
document.querySelector("#divideButton").addEventListener("click", onDivide);
document.querySelector("#averageButton").addEventListener("click", onAverage);

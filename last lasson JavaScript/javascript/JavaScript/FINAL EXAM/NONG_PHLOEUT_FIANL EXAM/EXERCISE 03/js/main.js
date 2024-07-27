let firstNumber = document.getElementById("firstnumber");
let lastnNmber = document.getElementById("lastnumber");
let showResults = document.querySelector("h1");

function subtraction(event){
    event.preventDefault();
    let result = 0;
    result += firstNumber.value - lastnNmber.value;
    showResults.textContent ="Result : " + result;
}
function dividing(event){
    event.preventDefault();
    let result = 0;
    result += firstNumber.value / lastnNmber.value;
    showResults.textContent ="Result : " + result;
}
function average(event){
    event.preventDefault();
    let result = 0;
    result += firstNumber.value / lastnNmber.value;
    showResults.textContent ="Result : " + result;
}


let button = document.querySelectorAll("button");
let buttonSubtraction = button[0];
buttonSubtraction.addEventListener("click",subtraction)
let buttonDividing = button[1];
buttonDividing.addEventListener("click",dividing)
let buttonAverage = button[2];
buttonAverage.addEventListener("click",average)

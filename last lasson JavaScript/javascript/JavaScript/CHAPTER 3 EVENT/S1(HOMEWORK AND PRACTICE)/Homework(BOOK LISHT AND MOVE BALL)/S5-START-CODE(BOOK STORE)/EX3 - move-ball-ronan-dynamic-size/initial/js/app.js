const BALL_SIZE = 100;

let ball = document.getElementById("ball");
let ballArea = document.getElementById("ball-area");

function moveLeft() {
	ball.style.left = "0px";

};

function moveRight() {
	let areaWidth = ballArea.getBoundingClientRect().width;
	ball.style.left = areaWidth - BALL_SIZE + "px";
};
console.log(ball)


function moveUp() {
	ball.style.top = "0";
};

function moveDown() {
  	let areahight = ballArea.getBoundingClientRect().height;
	ball.style.top = areahight - BALL_SIZE + "px";
};

// Get the 4 buttons and bind to the 4 functions
let buttonRight = document.getElementById("btn-move-right");
buttonRight.addEventListener("click", moveRight);

let buttonLeft = document.getElementById("btn-move-left");
buttonLeft.addEventListener("click", moveLeft);

let buttonDown = document.getElementById("btn-move-down");
buttonDown.addEventListener("click", moveDown);

let buttonUp = document.getElementById("btn-move-up");
buttonUp.addEventListener("click", moveUp);
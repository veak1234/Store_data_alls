let box = document.querySelector("#boxId");

function moveLeft() {
  // Move the box left
  box.style.left = "0";
}

function moveRight() {
  box.style.left = "300px";
  // Move the box right
}

function moveUp() {
  // Move the box up
  box.style.top = "0";
}

function moveDown() {
  box.style.top = "300px";
  // Move the box down
}

// Get the 4 buttons and bind to the 4 functions
let buttonRight = document.getElementById("btn-move-right");
buttonRight.addEventListener("click", moveRight);

let buttonLeft = document.getElementById("btn-move-left");
buttonLeft.addEventListener("click", moveLeft);

let buttonDown = document.getElementById("btn-move-down");
buttonDown.addEventListener("click", moveDown);

let buttonUp = document.getElementById("btn-move-up");
buttonUp.addEventListener("click", moveUp);

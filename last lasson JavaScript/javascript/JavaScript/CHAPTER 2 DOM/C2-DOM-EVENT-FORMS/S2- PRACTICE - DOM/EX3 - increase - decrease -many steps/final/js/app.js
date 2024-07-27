const MAX_SIZE = 800;
const MIN_SIZE = 100;
const STEP = 100;

// FUNCIONS --------------------------------------------------
let decreaseBox = () => {
  if (currentWidth - STEP >= MIN_SIZE) {
    currentWidth -= STEP;
    box.style.width = currentWidth + "px";
  }
};

let increaseBox = () => {
  if (currentWidth + STEP <= MAX_SIZE) {
    currentWidth += STEP;
    box.style.width = currentWidth + "px";
  }
};

// MAIN --------------------------------------------------
let box = document.querySelector("#box");

// Initialize the size of the box (100 px at the begining)
let currentWidth = MIN_SIZE;
box.style.width = currentWidth + "px";

// Add button functions
let btnDecrease = document.querySelector("#btn-decrease-width");
btnDecrease.addEventListener("click", decreaseBox);

let btnIncrease = document.querySelector("#btn-increase-width");
btnIncrease.addEventListener("click", increaseBox);

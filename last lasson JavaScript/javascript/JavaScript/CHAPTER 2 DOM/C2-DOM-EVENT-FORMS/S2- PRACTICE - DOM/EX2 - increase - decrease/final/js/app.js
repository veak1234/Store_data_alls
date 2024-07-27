// FUNCIONS --------------------------------------------------
let decreaseBox = () => {
  box.style.width = "100px";
};

let increaseBox = () => {
  box.style.width = "300px";
};

// MAIN --------------------------------------------------
let box = document.querySelector("#box");

let btnDecrease = document.querySelector("#btn-decrease-width");
btnDecrease.addEventListener("click", decreaseBox);

let btnIncrease = document.querySelector("#btn-increase-width");
btnIncrease.addEventListener("click", increaseBox);

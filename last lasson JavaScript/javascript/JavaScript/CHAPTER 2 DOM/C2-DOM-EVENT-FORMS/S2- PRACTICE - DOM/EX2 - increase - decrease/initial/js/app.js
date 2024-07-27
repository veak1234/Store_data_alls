
// FUNCIONS --------------------------------------------------
let decreaseBox = () => {
	// TODO set the box with to 100 px
};

let increaseBox = () => {
	// TODO set the box with to 300 px
};

// MAIN --------------------------------------------------
let box = document.querySelector("#box");

let btnDecrease = document.querySelector("#btn-decrease-width");
btnDecrease.addEventListener("click", decreaseBox);

let btnIncrease = document.querySelector("#btn-increase-width");
btnIncrease.addEventListener("click", increaseBox);


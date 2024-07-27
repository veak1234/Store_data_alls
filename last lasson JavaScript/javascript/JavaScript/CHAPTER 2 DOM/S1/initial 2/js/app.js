
// FUNCIONS --------------------------------------------------
let decreaseBox = () => {
	// TODO set the box with to 100 px
	// document.querySelector("#box").style.width ="100px";
	box.style.width="100px";
};

let increaseBox = () => {
	// TODO set the box with to 300 px
	// document.querySelector("#box").style.width ="300px";
	box.style.width="300px";
};

// MAIN --------------------------------------------------
let box = document.querySelector("#box");

let btnDecrease = document.querySelector("#btn-decrease-width");
btnDecrease.addEventListener("click", decreaseBox);

let btnIncrease = document.querySelector("#btn-increase-width");
btnIncrease.addEventListener("click", increaseBox);


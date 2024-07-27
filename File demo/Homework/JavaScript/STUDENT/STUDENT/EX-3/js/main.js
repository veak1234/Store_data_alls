const speedX = 3;
let positionX = 0;
let time = 10;
const person = document.getElementById("person");
let isReverseX = true;
let maxWidth = window.innerWidth - 250;
let minWidth = 0

function movePerson() {

  if (isReverseX) {
    // Increase the position x 
    positionX += speedX;
    // Set style left the constant variable person by position x 
    if (positionX >= maxWidth) {
      isReverseX = false;
    }
  person.classList.add("flip");
  person.style.left = positionX + "px";
}
else {
    // discrease the position x 
    positionX -= speedX;

    // Set style left the constant variable person by position x 
    if (positionX <= minWidth) {
      isReverseX = true;
    }

    person.classList.remove("flip");
    person.style.left = positionX + "px";
  }

  // if (positionX > maxWidth || positionX === minWidth) {
  //    isReverseX = !isReverseX;
  // }
}
setInterval(movePerson, time)

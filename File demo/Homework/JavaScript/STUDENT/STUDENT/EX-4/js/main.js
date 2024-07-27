const speedX = 3;
const speedY = 3;
let positionX = 0;
let positionY = 0;
let time = 10;
const bird = document.getElementById("bird");
let isReverseX = true;
let isReverseY = true;

let maxWidth = window.innerWidth - 250;
let minWidth = 0

let maxHeight = window.innerHeight - 190;
let minHeight = 0;

function moveBird(){
  if (isReverseX) {
    //  Todo 
    positionX += speedX;    
    bird.classList.remove("flip");

  } else {
    //  Todo 
    positionX -= speedX;  
    bird.classList.add("flip");

  };

  if (positionX > maxWidth || positionX === minWidth) {
    isReverseX = !isReverseX;

  }else if (isReverseY) {
    //  Todo 
    positionY += speedY;

  } else{
    //  Todo 
    positionY -= speedY;

  };

  if (positionY > maxHeight || positionY === minHeight) {
    isReverseY = !isReverseY;

  };

  bird.style.left = positionX + "px";
  bird.style.top = positionY + "px";
};

setInterval(moveBird, time)

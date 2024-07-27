const NUMBER_BOX = 10;

// 1- Create the 10 boxes
let container = document.querySelector(".container");

for (let i = 0; i < NUMBER_BOX; i++) {
  let spanText = document.createElement("span");   // create span for store number in box 
  let randomNumber = Math.floor(Math.random() * 100); // random number 0 to 100
  spanText.textContent = randomNumber;  //example :<span> randomNumber </span>
  // create 10box
  let box = document.createElement("div");
  box.classList.add("box"); //class name box
  box.appendChild(spanText);  //append span to box 
  container.appendChild(box); //append bos to container

  container.style.width="100%"; //container style width
  box.style.background="teal"; //box style background teal
  box.style.borderRadius="10px"; //box style background teal
  box.style.boxShadow="blue 1px 1px 1px 1px"; 

  box.addEventListener("click", onBoxClick);  //for click event on box
  
}

// This function is called when any box is clicked
function onBoxClick(event) {
  let box = event.target;
  let span = box.children[0];
  let isNumberEven = parseInt(span.textContent) % 2 === 0;
  if (isNumberEven) {
    box.style.background = "green";
    span.textContent = "WON " + span.textContent;
    span.style.opacity = "1";
    box.removeEventListener("click", onBoxClick); //for removeEventListener don't display agian
  } else {
    box.style.background = "red";
    span.textContent = "LOST " + span.textContent;
    span.style.opacity = "1";
    box.removeEventListener("click", onBoxClick); //for removeEventListener don't display agian
  }
}

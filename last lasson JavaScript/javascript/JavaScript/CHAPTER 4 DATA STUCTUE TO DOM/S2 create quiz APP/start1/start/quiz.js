// DOMS ELEMENTS  ---------------------------------------------------------
const dom_start = document.querySelector("#start");// get div start
// console.log(dom_start)
const dom_quiz = document.querySelector("#quiz");// get div start
// console.log(dom_quiz)
const dom_score = document.querySelector("#scoreContainer");// get div start
// console.log(dom_score)

// FUNCTIONS ---------------------------------------------------------

// Hide the given element
function hide(element) {  // parameter element get value form const 
  // TODO
  element.style.display = "none";
}

// SHow the given element
function show(element) {
  // TODO
  element.style.display = 'block';
}

// FUNCTIONS ---------------------------------------------------------
show(dom_start); // get the DOM element form fuction show
hide(dom_quiz);  // get the DOM element form fuction hide
hide(dom_score); // get the DOM element form fuction hide

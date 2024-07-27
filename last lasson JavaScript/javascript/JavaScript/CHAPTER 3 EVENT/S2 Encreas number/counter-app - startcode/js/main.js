// main

const number = document.querySelector("#number");
const btnGroup = document.querySelectorAll("button");
let counter = 0;
for (let btn of btnGroup) {
  btn.addEventListener("click", function (e) {
    let buttonClass = e.currentTarget.classList[1];

    // check class for increment or decrement or reset button

    if (buttonClass=="decrease"){
      counter--;
    }else if (buttonClass=="reset"){
      counter=0;
    }else{
      counter++;
    }
    // color counter
    if (counter<0){// if counter lower than 0  the color is red
      number.style.color="red";
    }else if(counter==0){// if counter equal to 0 the color is black
      number.style.color="black";
    }else{
      number.style.color="green"; // if counter greater than 1 the color is green
    }
    // output
    number.textContent = counter;
  });
}

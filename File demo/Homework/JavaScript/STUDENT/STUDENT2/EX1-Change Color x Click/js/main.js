
function randomColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}
function changeColor() {
    // TODO 
    // set the body background to random color
    document.body.style.backgroundColor = randomColor();  /* click */
}

// click on browser window to change color
document.addEventListener('click', changeColor)
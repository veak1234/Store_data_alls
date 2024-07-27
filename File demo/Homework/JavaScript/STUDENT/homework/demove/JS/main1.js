function randomColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function changeColor() {
    // TODO 
    // set the body background to random color
    let renDomChangeColor = randomColor();
    document.body.style.backgroundColor = renDomChangeColor;

};

document.addEventListener('click', changeColor);
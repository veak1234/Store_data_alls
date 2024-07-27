

function changeColor() {
    // TODO
    // change body color to color that get from input type color 
    const color = inputColor.value; /* tack the click on body */
    document.body.style.backgroundColor = color;
}

// Main
const inputColor = document.querySelector('#color')

// click on browser window to change color
document.addEventListener('change', changeColor)
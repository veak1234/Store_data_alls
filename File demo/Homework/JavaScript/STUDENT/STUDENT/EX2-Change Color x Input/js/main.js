


function changeColor(e) {
    // TODO
    // change body color to color that get from input type color 
    const selectedColor = e.target.value;
    document.body.style.backgroundColor = selectedColor;
    console.log(selectedColor)

}

// Main
const inputColor = document.querySelector('#color')

// click on browser window to change color
document.addEventListener('change', changeColor)

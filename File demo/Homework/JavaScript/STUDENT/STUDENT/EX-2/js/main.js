
// normal color
change = document.getElementById("meBaby");
function randomColor(){
    const colorCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9', 'a', 'b', 'c', 'd', 'e', 'f']
    let color = "#"
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 15)
        color += colorCode[index]
    }
    return color
}

// Gradient color
function randomGradientColor(){
    
    let color1 = randomColor();
    let color2 = randomColor();
    let color3 = randomColor();

// console.log(color1,color2)
    let angle = 'to right';

// set background color to body =  color code
    let gredient = 'linear-gradient(' + angle + ',' + color1 + ',' + color2 + ','  + color3+')';
    document.body.style.background = gredient;
    
// add text content to h1 = color code
    document.querySelector('h1').textContent = gredient;
};
setInterval(randomGradientColor,2000);




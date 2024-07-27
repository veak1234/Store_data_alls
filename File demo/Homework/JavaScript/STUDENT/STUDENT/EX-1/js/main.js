function randomColor(){

    const colorCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9', 'a', 'b', 'c', 'd', 'e', 'f'];
// Loop 6 times to get the color code by random from items in array
    let color = "#" /* .....ID of color.... */
// https://www.w3schools.com/js/js_random.asp
    for (let i = 0; i < 6 ; i++){
        let index = Math.floor(Math.random() * color.length);
        color += colorCode[index];
    }
// set background color to body =  color code
    document.body.style.background = color;

// add text content to h1 = color code    
    document.querySelector('h1').textContent = color;
    // console.log(color)
}
setInterval(randomColor,1000);


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn =   document.querySelector("button");   // your code here
const color = document.querySelector("#result-color"); // your code here
// console.log(color);

// return the color string code like example: #f00233
function colorCode() {
    let color ="#"
    for(let i=0;i<6;i++){
        color += hex[getRandomColor()];
    }
    // your code here
    // call get getRandomColor
    return color;
}

// return the number by random number between 0 and 16 (length of hex)
function getRandomColor() {
    // your code here
    return Math.floor(Math.random()*hex.length);
}

btn.addEventListener('click', function() {
   // your code here
   // call color code 
   let codeColor=colorCode()
   // change bg
   document.body.style.background=codeColor;
   // change color 
   color.style.color.codeColor;
   // change h1 content to color code 
   color.textContent=codeColor;

});
















// const arrayOfColorFunctions = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

// let randomColorString = '#';
// function newColorFind(){

// for (let x = 0; x < 6; x++){

//     let index = Math.floor(Math.random() * 16)
//     let value = arrayOfColorFunctions[index]

//     randomColorString += value
// }
//  console.log(randomColorString)
// }

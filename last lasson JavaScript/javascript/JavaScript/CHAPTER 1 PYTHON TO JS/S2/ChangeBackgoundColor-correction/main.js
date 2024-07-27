let choose = prompt("Choose color : 1 = red, 2 = green, 3 = purple")
color = ""
document.body.style.background = color;
if (choose == 1) {
    color="Red";
} else if (choose == 2) {
    color="Green";
} else if (choose == 3){
    color="Purple";
} else {
    color="black";
   
}
if (color!="black"){
    document.querySelector('h1').textContent = "Background is "+ color;
}
else{
    document.querySelector('h1').textContent = "You choose the wrong choice!";
}



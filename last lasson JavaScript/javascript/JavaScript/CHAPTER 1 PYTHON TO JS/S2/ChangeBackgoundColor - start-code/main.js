let numberOfcolor = prompt("My color 1 is red 2 is blue 3 is navy");
if (numberOfcolor == 1){
    // document.body.style.backgroundColor = "red";
    // document.querySelector("h2").textContent=("color red")
    // document.body.style.fontStyle = "italic";
    // document.body.style.textDecoration = "underline";
    // document.querySelector("h2").textContent=result;
    document.body.style.backgroundImage = "url('a.jpg')";
}else if (numberOfcolor == 2){
    document.body.style.backgroundColor = "blue";
    // document.body.style.backgroundRepeat = "no-repeat";
    document.querySelector("h2").textContent=("color blue")
}else if (numberOfcolor == 3 ){
    // document.body.style.backgroundColor = "green";
    // document.querySelector("h2").textContent=("color navy")
    document.body.style.backgroundImage = "url('b.webp')"
}else{
    document.body.style.backgroundColor = "black";
    document.querySelector("h2").textContent=("You choose the wrong choice!")
}

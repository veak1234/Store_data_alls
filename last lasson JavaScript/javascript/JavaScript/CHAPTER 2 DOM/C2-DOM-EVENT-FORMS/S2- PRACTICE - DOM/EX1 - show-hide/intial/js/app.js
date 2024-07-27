

let showImage = () => {
    // your code here
    getImage.style.display="block";
}
let hideImage = () => {
    // your code here
    getImage.style.display="none";
}
let getImage = document.getElementsByClassName("img-group");

let btnShow = document.querySelector("#btn-show");
console.log(btnShow)// your code here;
let btnHide = document.querySelector("#btn-hide") ;// your code here;

btnHide.addEventListener('click', hideImage);
btnShow.addEventListener('click', showImage);
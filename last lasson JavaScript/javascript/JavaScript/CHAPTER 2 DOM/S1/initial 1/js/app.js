let showImage = () => {
    // your code here
    // document.querySelector(".img-group").style.display = "block";
    document.querySelector(".img-group").style.display = "flex";
}
let hideImage = () => {
   // your code here
   document.querySelector(".img-group").style.display = "none";
}

let btnShow = document.getElementById("btn-show")// your code here;
let btnHide =  document.getElementById("btn-hide") // your code here;

// btnHide.addEventListener('mousemove', hideImage);
// btnShow.addEventListener('mousemove', showImage);
// addEventListener click
btnHide.addEventListener('click', hideImage);
btnShow.addEventListener('click', showImage);

let btnEvent = () => {
    document.body.style.backgroundColor = "red";
}
let paraEvent = () => {
    document.body.style.backgroundColor = "orange";
}
let divEvent = () => {
    document.body.style.backgroundColor = "teal";
}

const btn = document.querySelector('button');
const para = document.querySelector('p');
const div = document.querySelector('div');

btn.addEventListener('click', btnEvent);
para.addEventListener('click', paraEvent);
div.addEventListener('click', divEvent);

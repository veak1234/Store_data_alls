
let showImage = () => {
    let cards = document.querySelectorAll('.card');
    cards.forEach( card => {
        card.style.display = 'block';
    })
}
let hideImage = () => {
    let cards = document.querySelectorAll('.card');
    cards.forEach( card => {
        card.style.display = 'none';
    })
}

let btnShow = document.querySelector('#btn-show');
let btnHide = document.querySelector('#btn-hide');

btnHide.addEventListener('click', hideImage);
btnShow.addEventListener('click', showImage);
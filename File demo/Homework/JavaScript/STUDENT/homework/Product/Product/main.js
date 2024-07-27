let data = [
]
let col = document.querySelector('.col-7');
console.log(col)
function save() {
    localStorage.setItem('data', JSON.stringify(data));
}

function load() {
    fata = JSON.parse(localStorage.getItem('data'));
    // console.log(fata)
}

function display_product() {
    
    for (product of fata) {

        let card = document.createElement('div');
        card.classList.add('card');


        // console.log(card)
        // card.addEventListener('click',)


        let h3 = document.createElement('h3')
        h3.textContent = product.name;


        let pStock = document.createElement('p');
        pStock.textContent = 'Number in stock: ' + product.nb_stock;

        let pPrice = document.createElement('p');
        pPrice.textContent = 'Price: ' + product.price;


        let btn = document.createElement('button');
        btn.textContent = 'Add to cart';
        btn.addEventListener('click', add)
        card.appendChild(h3);
        card.appendChild(pStock);
        card.appendChild(pPrice);
        card.appendChild(btn);

        displayProduct.appendChild(card)

    }
}
function add(e) {
    // alert('hello');
    let booking = document.createElement('div');
    booking.className= 'card p-3 mt-3 flex-row justify-content-between  border-2';
    let contentcard = e.target.parentElement;
    let spanName = document.createElement('span');
    spanName.textContent = contentcard.children[0].textContent
    let spanPrice = document.createElement('span');
    spanPrice.textContent = contentcard.children[2].textContent;

    booking.appendChild(spanName);
    booking.appendChild(spanPrice);
    col.appendChild(booking);


}

load()
let displayProduct = document.querySelector('.displayProduct')

display_product()
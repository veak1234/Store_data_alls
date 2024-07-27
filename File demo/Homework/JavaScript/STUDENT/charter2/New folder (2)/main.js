
let data = [
    {product : 'Book', stock : 100, price : '5$'},
    {product : 'Computer', stock : 1000, price : '400$'},
    {product : 'IPhone 15pro', stock : 100, price : '2000$'},
];

let col = document.querySelector('#col_8');

function save(){
    localStorage.setItem("data", JSON.stringify(data));
};

function load(){
    data = JSON.parse(localStorage.getItem("data"));
};
save();

function display_prodact(){
    for(productDate of data){
        let card = document.createElement("div");
        card.className = 'card p-3 mt-3';
        card.setAttribute('id','id-Card')
        let h3 = document.createElement('h3');
        h3.textContent = productDate.product;
        let pStock = document.createElement('p');
        pStock.textContent = productDate.stock;

        let pPrice = document.createElement('p');
        pPrice.textContent = productDate.price;
        
        let button = document.createElement('button')
        button.id = i
        button.textContent = 'Add to Card';
        button.addEventListener('click', addToCard);
        
        card.appendChild(h3);
        card.appendChild(pStock);
        card.appendChild(pPrice);
        card.appendChild(button);
        
        displayProduct.appendChild(card);
    };
};


function addToCard(event){
    let indexOfProduct = event.target.id;
    let isPrudctNotExist = true;


    let productAddToCard = data[indexOfProduct];

    let card = document.createElement('div');
    card.classList = 'card p-3 mt-3 flex-row';
        
    let pNameSpan = document.createElement('span');
    pNameSpan.textContent = productAddToCard.product;
    
    let pPriceSpan = document.createElement('span');
    pPriceSpan.classList = 'ml-5';
    pPriceSpan.textContent = productAddToCard.stock;
    
    let pQSpan = document.createElement('span');
    pQSpan.classList = 'ml-5';
    pQSpan.textContent = productAddToCard.price;

    card.appendChild(pNameSpan);
    card.appendChild(pPriceSpan);
    card.appendChild(pQSpan);

    col.appendChild(card)

};
load();


let displayProduct = document.querySelector('#displayProduct');
display_prodact();



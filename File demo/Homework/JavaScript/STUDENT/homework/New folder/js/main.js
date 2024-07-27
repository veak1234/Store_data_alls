
let data = [
    // {product : 'Book', stock : 100, price : '5$'},
    // {product : 'Computer', stock : 1000, price : '400$'},
    // {product : 'IPhone 15pro', stock : 100, price : '2000$'},
];

let col = document.querySelector('.col-7');

function save(){
    localStorage.setItem("data", JSON.stringify(data));
};

function load(){
    data = JSON.parse(localStorage.getItem("data"));
};

function display_prodact(){
    save();
    for(product of data){
        let card = document.createElement("div");
        card.className = 'card p-3 mt-3';
        card.setAttribute('id','id-Card')
        let h3 = document.createElement('h3');
        h3.textContent = product.product;
        let pStock = document.createElement('p');
        pStock.textContent = product.stock;

        let pPrice = document.createElement('p');
        pPrice.textContent = product.price;
        
        let button = document.createElement('button');
        button.textContent = 'Add to Card';
        button.addEventListener('click', addToCard);
        
        card.appendChild(h3);
        card.appendChild(pStock);
        card.appendChild(pPrice);
        card.appendChild(button);
        
        displayProduct.appendChild(card);
    };
};

let sum = 0;
function addToCard(event){
    // event.target.parentElement//
    let data = event.target.parentElement;
    let cardDate = data.children[1]
    let isPrudctNotExist = true;
    console.log(cardDate)
    sum+=1
    
    for (product of col.children){
        if(product.children[0].textContent === data.children[0].textContent){
            product.children[3].textContent = sum
            
            product.children[2].textContent = parseInt(product.children[2].textContent) + parseInt(data.children[2].textContent)+'$';
            // let pricePerUnit = parseInt(product.children[2].textContent);
            isPrudctNotExist = false;
            
        };
    };


    if(isPrudctNotExist){
        let get = document.createElement('div');
        get.className = 'card p-3 mt-3 flex-row justify-content-baseline border-dange';
    
        let p = document.createElement('p');
        p.className = "p"
        p.style.flex = '1';
        p.style.color = 'red';
        p.textContent = 'Price: ';

        let tp = document.createElement('p');
        tp.style.flex = '1'
        tp.textContent  = data.children[2].textContent;
        
        let h3 = document.createElement('h3');
        h3.textContent = data.children[0].textContent;
        h3.style.flex = '1';
    
        let number = document.createElement('number');
        number.style.flex = '1';
        number.textContent = '1';
    
        let img = document.createElement('img');
        img.src = "../img/delete.png";
        img.style.color = 'red';
    
        img.addEventListener('click',function() {
            if (confirm('Are you sure to remove order?')) {
                img.parentElement.remove();
            }
    
        });
    
    
        get.appendChild(h3);
        get.appendChild(p);
        get.appendChild(tp);
        get.appendChild(number)
        get.appendChild(img);
    
        col.appendChild(get);
    };

};

load();

let displayProduct = document.querySelector('#displayProduct');
display_prodact();




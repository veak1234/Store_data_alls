function getTotal() {
    // TODO 
    sum = 0;
    let addTr = document.querySelectorAll('tbody tr');
    for( let tr of addTr){
        sum += parseInt(tr.children[3].textContent.replace('$',''));
    };
    total.textContent = sum + "$";

};

function getQuantities(e) {
    // TODO     
    // update total
    let Quantities = e.target.value;
    let price = e.target.closest('tr').children[2].textContent.replace('$','');
    let t = e.target.closest('tr').children[3];
    t.textContent =  Number(price) * Quantities +'$';
    getTotal();
    
};

let quantities = document.querySelectorAll('input');
let total = document.querySelector('.total');
for (let qty of quantities) {
    qty.addEventListener('change', getQuantities);
};
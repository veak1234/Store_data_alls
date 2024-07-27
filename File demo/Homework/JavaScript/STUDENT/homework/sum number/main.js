
let min = document.getElementById('min');
let plus = document.getElementById('plus');
let result = document.getElementById('result');
let total = document.getElementById('total');

min.addEventListener('click',minFuction);
result.addEventListener('click',resultFuction);
let number = 0;
let res = 0;

function minFuction(){
    number -=1;
    result.textContent =  number + ' +';
    sumTotal()
};
function resultFuction(){
    number +=1;
    result.textContent = number + ' +';
    sumTotal()
};
function sumTotal(){
    total.textContent = 'total : '+ number*100;
}
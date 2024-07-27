
let num1 = '';
let num2 = '';
let operator = '';
    
document.querySelector('#display').value = '0000000000000000000000';
function cleardate(){
    num1 = '';
    num2 = '';
    operator = '';
    result = '';
    document.querySelector('#display').value = '0000000000000000000000';

};

function addValue(value){

    if(operator == ''){
        num1 += value;
        document.querySelector('#display').value = num1;
    }else{
        num2 += value;
        document.querySelector('#display').value = num2;
    };
};

function addOperator(sign){
    operator = sign;

};

function equal(){

    if (operator == '+') {
        document.querySelector('#display').value = Number(num1) + Number(num2);
    }else if (operator == '-') {
        document.querySelector('#display').value = Number(num1) - Number(num2);
    }else if (operator == '*') {
        document.querySelector('#display').value = Number(num1) * Number(num2);
    }else if (operator == '/'){
        document.querySelector('#display').value = Number(num1) / Number(num2);
    };

};


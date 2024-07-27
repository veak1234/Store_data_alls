const number = document.querySelector('#number');
const btn = document.querySelectorAll('button');
let counter = 0;

for(let btns of btn){
    btns.addEventListener('click', function(e){
        
        let buttonClass = e.currentTarget.classList[1];

        if (buttonClass == "decrease"){
            counter--;
        }else if (buttonClass == "reset"){
            counter = 0;
        }else{
            counter++;
        };
        // color 
        if (counter < 0){
            number.style.color = 'red';
        }else if(counter == 0){
            number.style.color = 'black';
        }else{
            number.style.color = 'blue';
        };
        number.textContent = counter;
    });
};


let add = document.querySelector('.submit');
add.addEventListener('click', function (){
    let numbers = document.querySelector('.number');
    if (counter < 0){
        numbers.style.color = 'red';
    }else if(counter == 0){
        numbers.style.color = 'black';
    }else{
        numbers.style.color = 'blue';
    };
    numbers.textContent = counter;

});


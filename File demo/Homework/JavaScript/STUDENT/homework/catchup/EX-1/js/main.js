let container = document.querySelector('.container');
let button = document.querySelector('button');
let run = true;
let p = document.createElement('p');
let h1 = document.createElement('h1');
button.addEventListener('click', function(){
    if(run){
        container.appendChild(p);
        button.textContent='Button Your';
        p.textContent='You are love me';

        run = false;
    }else{
        p.remove();
        container.appendChild(p)
        button.textContent='Button me';
        p.textContent='I love to'
        run=true;
    }
});
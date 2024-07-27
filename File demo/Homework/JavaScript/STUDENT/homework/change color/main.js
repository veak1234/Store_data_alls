let body = document.querySelector('body');
let btn = document.createElement('button');
let h1 = document.createElement('h1');
btn.setAttribute('id','btn');
btn.textContent = 'change color';
body.appendChild(btn);
body.appendChild(h1);
h1.style.color = 'white';


btn.addEventListener('click',myfuction);
function myfuction() {
    let array = ['1','2','3','4','5','6','7','8','9','a','b','d','e'];
    let color = '#';
    for(let i = 0; i<6; i++){
        let index = Math.floor(Math.random()*array.length)
        color += array[index]
    };
    document.body.style.backgroundColor = color;
    h1.textContent = color;
    
};
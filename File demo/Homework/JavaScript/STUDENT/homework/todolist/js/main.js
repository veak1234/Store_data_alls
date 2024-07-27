let data = [
    {task: 'hello', line: 'card'},
    {task: 'hello', line: 'card'},
    {task: 'hello', line: 'card'}

];

let body = document.querySelector('body');
let div = document.createElement('div');
div.className='container';
body.appendChild(div);

let row = document.createElement('div');
row.className='row'
div.appendChild(row);

let col = document.createElement('div');
let h1 = document.createElement('h1');
col.className='col-6 mt-5';
col.appendChild(h1)
h1.textContent='All tasks'
row.appendChild(col)

for(let i= 0; i < data.length; i++){

    let row1 = document.createElement('div');
    row1.className='row'
    col.appendChild(row1)
    
    let card = document.createElement('div');
    row1.appendChild(card)
    card.className='card p-4 border-danger mt-2'
    
    let span=document.createElement('span')
    card.appendChild(span)
    
    let input= document.createElement('input');
    input.type='checkbox'
    input.className='markAsDone'
    input.setAttribute('id','markAsDone');
    span.appendChild(input)
    
    let p = document.createElement('p');
    span.appendChild(p)
    p.textContent ='Lorem ipsum dolor sit amet consectetur adipisicing elit. tiae voluptates labore?'
    
    let a = document.createElement('a');
    a.href='https://www.google.com/'
    a.textContent ='Read more'
    span.appendChild(a)
    
    let button= document.createElement('button')
    card.appendChild(button)
    button.className='btn btn-danger'
    button.textContent='Delete'

    
    
}
console.log(row)

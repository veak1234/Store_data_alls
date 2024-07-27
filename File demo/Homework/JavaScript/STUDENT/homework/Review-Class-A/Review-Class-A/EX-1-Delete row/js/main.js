

let button = document.querySelectorAll('button');

function removeTable(e){
    let isConfrom = confirm('You are agree !');
    let tableRow = e.target.closest('tr');
    if (isConfrom){
        tableRow.remove();
    };
};

for(const buttons of button){
    buttons.addEventListener('click',removeTable);
};

















 


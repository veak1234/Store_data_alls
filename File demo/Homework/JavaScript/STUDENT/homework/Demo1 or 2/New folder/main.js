



let tasks = [
    {description:'Task 1', priority:1},
    {description:'Task 2', priority:0},
    {description:'Task 3', priority:1},
    {description:'Task 4', priority:0},

];

for (value of tasks){
    let div= document.querySelector('.tap');
    let h1 = document.createElement('h1');
    h1.appendChild ='h1';
    div.appendChild(h1);
    h1.textContent=value.description;


    let textContents = value.priority;
    if(textContents == 0){
        h1.style.background = "pink"; 
    }else if(textContents == 1){
        h1.style.background = "aqua";
    };
    
};
function myfunction(){
    const tasks = document. querySelector('input'). value;
    const tag = document. querySelector('input'). value;
    
    console.log(tag)
    console.log(tasks)
    
}
document.getElementById('myAdd').addEventListener('click', myfunction);


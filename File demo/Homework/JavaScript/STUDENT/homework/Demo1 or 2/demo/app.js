// Select DOM for needed----------------
let taskInput = document.querySelector("#task");
let priorityInput = document.querySelector("#priority");
let btn = document.querySelector("button");
btn.addEventListener('click', addTask)

//save tasks in localstorage
function save(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
// loadData 
function loadData(){
    let data = localStorage.getItem('tasks');
    return data;
}
// Database to store all the tasks---------
let tasks = [];

loadData()

function addTask(e){
    e.preventDefault();
    let task = {description:taskInput.value, priority:parseInt(priorityInput.value)};
    tasks.push(task);
    displayTask();
}
// Function used for display all the tasks
function displayTask(){
    let tasks =  JSON.parse(loadData());
    
    let result = document.querySelector(".result");
    if (result){
        result.remove()
        save()    
    }
    
    let output = document.createElement("div");
    output.className = "result";
    
    for (value of tasks){
        let div = document.createElement("div");
        div.className = "list";
        let h1 = document.createElement("h1");
        if (value.priority === 0){
            div.style.background = "gray";
        }
        h1.textContent = value.description;

        div.appendChild(h1)
        output.appendChild(div);
    }
    document.body.appendChild(output);

}
displayTask()
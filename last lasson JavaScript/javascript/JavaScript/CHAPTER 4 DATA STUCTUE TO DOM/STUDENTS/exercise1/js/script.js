// This is our data structure of TASKS
let tasks = [
  { description: "Do homework", priority: 1 },
  { description: "Wash clothes", priority: 0 },
  { description: "Dream about Javascript", priority: 1 },
];

function displayArray(array) { //array = tasks
  // 1 - From the parent body : create a new div  (class : container)
  let div1 = document.createElement("div");
  div1.classList.add("container");
  
  // 2 - For all tasks,  create a new div (class : item),(textContent : task.description)
  for (let value of array) {
    let div2 = document.createElement("div");
    div2.classList.add("item")
    div2.textContent = value.description;
    // 3 - The priority defines the color of your task (1 (HIGHT) = red, 0 (LOW) = gray)
    let color = "red";
    if(value.priority === 0){
      color = 'gray';
    }
    div2.style.background=color;
    // 4 - append it the container
    div1.appendChild(div2);
  }
  // 5 - appent div class container to body
  document.body.appendChild(div1);
}

displayArray(tasks);

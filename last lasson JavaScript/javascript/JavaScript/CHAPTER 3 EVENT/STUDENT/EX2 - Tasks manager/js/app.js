function addTask(event) {
  // --------- TO HELP YOU --------------------------
  // 1- Prevent default to avoid to refresh the page
  // TODO
  event.preventDefault();
  // 2- Get the form inputs  information
  // TODO
  let task = document.querySelector("#taskId");
  let color = document.querySelector("#color");
  let date = document.querySelector("#date");
  let dashboard = document.querySelector(".dashboard");
  // 3- Check if task text, color, date are defined :
  //    If not defined, display a warnning        "You must fill all inputs"
  // TODO
  if(task.value !="" && color.value !="#00000" && date.value !=""){
  // 4 - If defined:
  // 4-1- Create a span for the taks name
  //    - class = "task-name"
  //    - textContent =  task text
  // TODO
  let span1 = document.createElement("span");
  span1.classList.add("task-name");
  span1.textContent = task.value;
  // 4-2- Create a span for the taks date
  //    - class = "task-date"
  //    - textContent =  task date
  // TODO
  let span2 = document.createElement("span");
  span2.classList.add("task-date");
  span2.textContent = date.value;
  
  // 4-3- Create a p containing the 2 spans
  // TODO
  let p  = document.createElement("p");
  p.appendChild(span1)
  p.appendChild(span2)
  console.log(p)
  // 4-4- the P background color is the selected color
  // TODO
  p.style.background=color.value;
  p.style.color="white";
  // 5 - access to div classname =  "dashboard" 
  //   - append p to div
  dashboard.appendChild(p)
  // 6 - clear up input on form 
    // example : document.document.getElementById("taskId").value = "";
  task.value=""
  date.value=""
  }
  else{
    window.confirm("You must fill all inputs!")
  }
}

// MAIN ----------------------------------------------------
const btnAddTask = document.getElementById("addTaskButton");
btnAddTask.addEventListener("click", addTask);

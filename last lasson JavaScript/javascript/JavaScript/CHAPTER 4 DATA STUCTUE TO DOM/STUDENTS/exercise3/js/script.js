// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function displayArray(array) {
  //1- You have to delete the old node parent were is stored the items of your list
  let containers = document.querySelectorAll(".container");
  if (containers[1] != undefined) {
    containers[1].remove();
  }
  // 2-Create a new container that will contain the items in your list
  let container = document.createElement("div");
  container.classList="container";
  document.body.appendChild(container);

  // 3 - For all tasks,  create a new div (class : item), and append it the container
  // 3.1 the priority defines the color of your item (1 (HIGHT) = red, 0 (LOW) = grey)
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
    container.appendChild(div2);
  }

}

function addItem() {
  // 1- Create a new task
  // TODO
  let newtask ={}
  //  2- Set the description from the text field
  // TODO
  let description = document.querySelector("#description").value;
  // newtask["description"]=description; ///another tip
  newtask.description=description;
  console.log(description);
  // 3- Set the priority from select field
  // TODO
  let priority = document.querySelector("#priority").value;
  console.log(priority);
  if(priority ==="Hight"){
    // newtask["priority"] = 1 ///another tip
    newtask.priority = 1
  }else{
    // newtask["priority"] = 0 ///another tip
    newtask.priority = 0 
  }
  // 4- Add the new object to the array
  // TODO
  tasks.push(newtask);
  console.log(tasks);
   // 5- Call  the displayArray function to refresh the DOM
   displayArray(tasks);
}
// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);

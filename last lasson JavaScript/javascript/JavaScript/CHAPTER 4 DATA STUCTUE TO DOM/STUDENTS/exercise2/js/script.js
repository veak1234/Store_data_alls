// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function addItem() {
  // 1- Create a new task
  // TODO
  let newtask ={}
  //  2- Set the description from the text field
  // TODO
  let description = document.querySelector("#description");
  // newtask["description"]=description; ///another tip
  newtask.description=description.value;
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
  description.value=" "
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

// run the function addItem when you click on the button
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);

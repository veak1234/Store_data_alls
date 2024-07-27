let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");
// console.log(container1)

//  1- Move the item 3 to the second container
let item3 = container1.firstElementChild.nextElementSibling.nextElementSibling;
container2.appendChild(item3);
// console.log(item3)
//  2- Remove item 4
let item4 = container2.firstElementChild;
container2.removeChild(item4);

// 3- Create a new item 10 and add it to container 3
let create10 = document.createElement("div");
create10.classList.add("item");
create10.textContent="10";
container3.appendChild(create10);
// console.log(create10); 
//  4- Set all item in blue containers  background color to  red
// container1.textContent.style.color="red";
// console.log(container1.firstElementChild.textContent.style.color="red");


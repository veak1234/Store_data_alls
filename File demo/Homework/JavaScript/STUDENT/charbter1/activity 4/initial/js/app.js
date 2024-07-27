let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

//  1- Move the item 3 to the second container
let contain1 = document.getElementsByClassName('item');
contain1[2].remove();

//  2- Remove item 4
contain1[2].remove();

// 3- Create a new item 10 and add it to container 3
let d = document.createElement('div');
d.className = 'item';
d.textContent = '10';
container3.appendChild(d);

//  4- Set all item in blue containers  background color to  red
for (let i =0; i<contain1.length; i++){
    contain1[i].style.background='red';

};

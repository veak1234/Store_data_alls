// ------------------------------------------------
// 1> Listen only to grand parent click => check we can also click on parent and child
// --------------------------------------------------
function doGrandParent(event) {
  console.log("grand parent");
}

let grandParent = document.querySelector(".grandParent");
grandParent.addEventListener("click", doGrandParent);

function doParent(event) {
  console.log("parent");
  event.stopPropagation();
}
let parent = document.querySelector(".parent");
parent.addEventListener("click", doParent);

function doChild(event) {
  console.log("child");
  event.stopPropagation();
}
let child = document.querySelector(".child");
child.addEventListener("click", doChild);

// ------------------------------------------------
// 2> Listen to grand parent + parent + child => understand  why child > parent > grand parent
// --------------------------------------------------

// let grandParent = document.querySelector(".grandParent");
// grandParent.addEventListener("click", (e) => console.log("grand parent"));

// let parent = document.querySelector(".parent");
// parent.addEventListener("click", (e) => console.log("parent"));

// let child = document.querySelector(".child");
// child.addEventListener("click", (e) => console.log("child"));

// ------------------------------------------------
// 3> Use event.stopPropagation() when trigering on child to avoid going to parent and grand parent
// --------------------------------------------------

// let grandParent = document.querySelector(".grandParent");
// grandParent.addEventListener("click", (e) => console.log("grand parent"));

// let parent = document.querySelector(".parent");
// parent.addEventListener("click", (e) => console.log("parent"));

// let child = document.querySelector(".child");
// child.addEventListener("click", (e) => {
//   console.log("child");
//   e.stopPropagation();
// });

// ------------------------------------------------------------------------------------
// 4> Listen to all DIV at the begining - then add a new DIV : check this new div is not listened
// --------------------------------------------------------------------------------------

// let allDiv = document.querySelectorAll("div");
// for (let d of allDiv) {
//   d.addEventListener("click", (e) => console.log("hello"));
// }
let allDiv = document.querySelectorAll("div");
for (let d of allDiv) {
  document.addEventListener("click",(e) => {
    if(e.target.matches("div")){
      console.log("hi")
    }
  })
}

let brother = document.createElement("div");
brother.className = "brother";
document.body.appendChild(brother);

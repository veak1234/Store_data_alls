
let buttonDelete = document.querySelector("button");
console.log(buttonDelete);
function removeCard(event){
    confirm("Are you sure you want to delete?");
    let getRemove = document.querySelectorAll(".card");
    for(let value of getRemove){
        // console.log(getRemove);
        event.target.parentNode.remove();
        // value.remove();
    }
}

buttonDelete.addEventListener("click", removeCard);
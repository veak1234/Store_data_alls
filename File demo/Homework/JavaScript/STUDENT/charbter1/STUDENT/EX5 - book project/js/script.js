// TODO
let deleteLists = document.querySelectorAll('li');
console.log(deleteLists)


let deleteList = document.querySelectorAll('.delete');
for (let btu of deleteList){
    btu.addEventListener('click',(event) => {
        event.target.closest('li').remove()
    });
};
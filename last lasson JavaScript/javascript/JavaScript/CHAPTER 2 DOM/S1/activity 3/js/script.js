function deleteBooks(event){
    if(event.taget.className="delete"){
        let li=event.taget.parentElement;
        booklist.removeChild(li);
        console.log(li)
      
    }
}
let booklist = document.querySelector("#book-list")
console.log(booklist)
booklist.addEventListener("click",deleteBooks);
// console.log(booklist)
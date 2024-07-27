// 1- Get the list of books ( tips : use the querySelectorAll )
// TODO
let books = document.querySelectorAll(".book-name");

// 2- Display the number of books on paragrah "books-number"
// TODO
let numberOfBooks = books.length;
document.getElementById("books-number").textContent = numberOfBooks;

// 3- Display the title of the books  on paragrah "books-titles"
// TODO
let countNameOfBooks = "";
for(let value of books){
    countNameOfBooks += value.textContent+";";
}
document.getElementById("books-titles").textContent = countNameOfBooks;



// >>>><<<how to access Element >>>><<<<<>>>>><<<<<<<<<<<<<<>>><<<<<<<<<<<<<<<<<<
let booksListDiv = document.querySelector("#book-list");
console.log(booksListDiv);
console.log(booksListDiv.lastElementChild);
console.log(booksListDiv.firstElementChild.textContent);
// console.log(booksListDiv.childNodes[3].childNodes[0]);
console.log(booksListDiv.childNodes[2].childNodes[0]);
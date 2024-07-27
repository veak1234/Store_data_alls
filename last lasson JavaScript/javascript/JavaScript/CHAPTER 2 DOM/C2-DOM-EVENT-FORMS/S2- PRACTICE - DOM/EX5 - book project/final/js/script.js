// 1- Get the list of books
let bookList = document.querySelectorAll(".book-name");

// 2- Display the number of books
let bookNumber = document.getElementById("books-number");
bookNumber.textContent = bookList.length;

// 3- Display the title of the books
titles = "";
for (element of bookList) {
  titles += element.textContent + ", ";
}

let bookTitle = document.getElementById("books-titles");
bookTitle.textContent = titles;

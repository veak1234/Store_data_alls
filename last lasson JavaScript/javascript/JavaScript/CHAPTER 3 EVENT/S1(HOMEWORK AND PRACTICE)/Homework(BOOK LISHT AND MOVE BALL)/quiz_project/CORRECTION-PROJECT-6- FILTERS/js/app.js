let books = [];

let editedBookIndex = -1; // no book edited for now

// FUNCTIONS--------------------------------------------------------

function createBook(event) {
  event.preventDefault();

  if (editedBookIndex === -1) {
    // CREATION MODE
    let newBook = {};
    newBook.title = bookForm.title.value;
    newBook.author = bookForm.author.value;
    newBook.purchaseDate = bookForm.purchaseDate.value;
    newBook.description = bookForm.description.value;
    books.push(newBook);
  } else {
    // EDITION MODE
    let book = books[editedBookIndex];
    book.title = bookForm.title.value;
    book.author = bookForm.author.value;
    book.purchaseDate = bookForm.purchaseDate.value;
    book.description = bookForm.description.value;

    editedBookIndex = -1; // set back the edited index to -1
  }

  // 2 - Update the list
  displayBooksWithFilter();

  // 3 - Show the cards again
  showCards();
}

function displayBooksWithFilter() {
  let filterBooks = [];

  if (checkboxGoodBooks.checked) {
    for (let book of books) {
      if (book.title.includes("good")) {
        filterBooks.push(book);
      }
    }
  } else {
    filterBooks = books; // all books
  }
  displayBooks(filterBooks);
}

function displayBooks(arrayBooks) {
  // Remove the card container and create a new one
  cardContainer.remove();
  cardContainer = document.createElement("div");
  cardContainer.id = "cardContainer";
  mainContainer.appendChild(cardContainer);

  // 2 - For all tasks,  create a new div (class : item), and append it the container
  for (let index = 0; index < arrayBooks.length; index++) {
    let book = arrayBooks[index];

    let card = document.createElement("div");
    card.className = "card";
    card.dataset.index = index;
    cardContainer.appendChild(card);

    // Create spams for title and author
    let bookInfos = document.createElement("div");
    bookInfos.className = "book-info";
    card.appendChild(bookInfos);

    let title = document.createElement("spam");
    title.className = "title";
    title.textContent = book.title;
    bookInfos.appendChild(title);

    let author = document.createElement("spam");
    author.className = "author";
    author.textContent = book.author;
    bookInfos.appendChild(author);

    // Create spams for title and author
    let actions = document.createElement("div");
    actions.className = "user-action";
    card.appendChild(actions);

    let editAction = document.createElement("img");
    editAction.src = "img/edit.svg";
    editAction.addEventListener("click", startEditBook);
    actions.appendChild(editAction);

    let trashAction = document.createElement("img");
    trashAction.src = "img/trash.png";
    trashAction.addEventListener("click", removeBook);
    actions.appendChild(trashAction);
  }
}

function startEditBook(event) {
  // 1- get the id from dataset
  let index = event.target.parentElement.parentElement.dataset.index;

  // 2 Get book
  let book = books[index];

  // 3 Update form
  bookForm.title.value = book.title;
  bookForm.author.value = book.author;
  bookForm.purchaseDate.value = book.purchaseDate;
  bookForm.description.value = book.description;

  // 4 - Set the edited index
  editedBookIndex = index;

  // 4 Show form
  showForm();
}

function removeBook(event) {
  // 1- get the id from dataset
  let index = event.target.parentElement.parentElement.dataset.index;

  // 1- Remove the book from the list of books
  books.splice(index, 1);

  // 2 - Update the DOM
  displayBooksWithFilter();
}

function setVisible(element, isVisible) {
  if (isVisible) {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

function showForm() {
  setVisible(bookForm, true);
  setVisible(cardContainer, false);

  setVisible(btnAdd, false);
  setVisible(goodBookPanel, false);

  setVisible(btnClose, true);
}

function showCards() {
  setVisible(bookForm, false);
  setVisible(cardContainer, true);

  setVisible(btnClose, false);
  setVisible(btnAdd, true);
  setVisible(goodBookPanel, true);
}

const btnClose = document.querySelector("#close-id");
btnClose.addEventListener("click", showCards);

const btnAdd = document.querySelector("#add-id");
btnAdd.addEventListener("click", showForm);

const btnCreate = document.querySelector("#btn-create");
btnCreate.addEventListener("click", createBook);

const goodBookPanel = document.querySelector("#goodBookPanel");
const checkboxGoodBooks = document.querySelector("#checkboxGoodBooks");
checkboxGoodBooks.addEventListener("click", displayBooksWithFilter);

let mainContainer = document.querySelector("#mainContainer");
let cardContainer = document.querySelector("#cardContainer");

// At begining : show the cards
showCards();

// Show all books
displayBooksWithFilter();

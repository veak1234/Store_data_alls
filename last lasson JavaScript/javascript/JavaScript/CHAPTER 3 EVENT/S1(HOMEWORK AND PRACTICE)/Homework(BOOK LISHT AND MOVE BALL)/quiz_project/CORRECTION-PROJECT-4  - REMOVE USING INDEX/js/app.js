let books = [];

// FUNCTIONS--------------------------------------------------------

function createBook(event) {
  event.preventDefault();

  // 1 - Create a new book
  let newBook = {};
  newBook.title = bookForm.title.value;
  newBook.author = bookForm.author.value;
  newBook.purchaseDate = bookForm.purchaseDate.value;
  newBook.description = bookForm.description.value;
  books.push(newBook);

  // 2 - Update the DOM
  displayBooks(books);

  // 3 - Show the cards again
  showCards();
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
    actions.appendChild(editAction);

    let trashAction = document.createElement("img");
    trashAction.src = "img/trash.png";
    actions.appendChild(trashAction);

    trashAction.addEventListener("click", (e) => {
      // 1- get the id from dataset
      let index = e.target.parentElement.parentElement.dataset.index;

      // 2- Remove the book from the list of books
      books.splice(index, 1);

      // 3 - Update the DOM
      displayBooks(books);
    });
  }
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
  setVisible(btnClose, true);
}

function showCards() {
  setVisible(bookForm, false);
  setVisible(cardContainer, true);

  setVisible(btnClose, false);
  setVisible(btnAdd, true);
}

const btnClose = document.querySelector("#close-id");
const btnAdd = document.querySelector("#add-id");
const btnCreate = document.querySelector("#btn-create");

let mainContainer = document.querySelector("#mainContainer");
let cardContainer = document.querySelector("#cardContainer");

btnAdd.addEventListener("click", showForm);
btnClose.addEventListener("click", showCards);
btnCreate.addEventListener("click", createBook);

// At begining : show the cards
showCards();

// Show all books
displayBooks(books);

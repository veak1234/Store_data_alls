let books = [
  {
    title: "java",
    author: "ronan",
    purchaseDate: "01/04/2021",
    description: "the best",
  },
  {
    title: "java",
    author: "rady",
    purchaseDate: "01/04/2021",
    description: "the best",
  },
];

// FUNCTIONS--------------------------------------------------------

function displayBooks(arrayBooks) {
  // Remove the card container and create a new one
  cardContainer.remove();
  cardContainer = document.createElement("div");
  cardContainer.id = "cardContainer";
  mainContainer.appendChild(cardContainer);

  // 2 - For all tasks,  create a new div (class : item), and append it the container
  for (let book of arrayBooks) {
    let card = document.createElement("div");
    card.className = "card";
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

function showCards(event) {
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
btnCreate.addEventListener("click", showCards);

// At begining : show the cards
showCards(null);

displayBooks(books);

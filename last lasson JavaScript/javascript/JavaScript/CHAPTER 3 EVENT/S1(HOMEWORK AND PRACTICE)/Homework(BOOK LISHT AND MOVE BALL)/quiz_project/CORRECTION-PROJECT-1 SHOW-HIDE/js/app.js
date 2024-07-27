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

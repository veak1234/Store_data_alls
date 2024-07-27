// create a new card

function createCard(id) {
  const card = document.createElement('div');
  card.classList.add('card');

  // card body
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  card.appendChild(cardBody);
  
  // card image in card body
  const cardImage = document.createElement('img');
  cardImage.src = "images/sample.png";
  cardBody.appendChild(cardImage);

  // card text in card body
  const cardText = document.createElement('p');
  cardText.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, atque.';
  cardBody.appendChild(cardText);
  
  // card footer
  const cardFooter = document.createElement('div');
  cardFooter.classList.add('card-footer');
  card.appendChild(cardFooter);

  // button in card footer
  const cardButton = document.createElement('button');
  cardButton.textContent = 'Close Card (' + id + ')';
  cardFooter.appendChild(cardButton);

  // add card to containers
  container.appendChild(card)

};

// display card
function displayCard(n) {
  for (let i = 0; i < n; i++) {
    createCard(i + 1);
  };
};

// Main
const container = document.querySelector('.container');
// call displayCard x 10
displayCard(10);

// create function delete card 
function deleteCard(event) {
  // TODO 
  // get parent(card) of button use closest() function
  // remove parent 
  let card = event.target.closest('.card');
  card.remove();
  
};

// get all cards
let cards = document.querySelectorAll('.card')
// add event listener for all card's buttons then call funtion deleteCard
cards.forEach(function(card){
  const button = card.querySelector('button');
  button.addEventListener('click', deleteCard);
});

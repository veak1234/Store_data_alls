// create a new card
function createCard() {
   const card = document.createElement('div');
   card.classList.add('card');
 
// CARD BODY
const cardBody = document.createElement('div');
cardBody.classList.add('card-body');
card.appendChild(cardBody);

// CARD IMAGE
const cardImage = document.createElement('img');
cardImage.src = 'images/sample.png';
cardBody.appendChild(cardImage);

// CARD TEXT
const cardText = document.createElement('p');
cardText.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, atque.';
cardBody.appendChild(cardText);

// CARD FOOTER
const cardFooter = document.createElement('div');
cardFooter.classList.add('card-footer');
card.appendChild(cardFooter);

// BUTTON IN CARD FOOTER
const cardButton = document.createElement('button');
cardButton.classList.add('button');

cardButton.textContent = 'Remove Card';   

cardFooter.appendChild(cardButton);
   // add card to containers
container.appendChild(card)

   
}

// Number of card
function numberOfCard() {
   n = number.value;
   // TODO 
   for(let i = 0; i < n; i++){
      createCard();
   }
   
}

// Main
const btnCreate = document.querySelector('#create');
const number = document.querySelector('#input');
const container = document.querySelector('.container');

btnCreate.addEventListener('click', numberOfCard);
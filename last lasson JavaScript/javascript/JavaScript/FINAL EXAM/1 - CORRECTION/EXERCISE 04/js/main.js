// Variables ========================================
const result = document.querySelector("#result");
const getName = document.querySelector("#name");
const getGender = document.querySelector("#gender");
const getSports = document.querySelectorAll("#sport");
const getQuote = document.querySelector("#message");

// Create new student -------------------------------
function createNewStudent(e) {
  e.preventDefault();

  let card = document.createElement("div");
  let name = document.createElement("h1");

  card.className = "card male";
  name.textContent = "Mr. " + getName.value;

  if (getGender.value == "Female") {
    card.className = "card female";
    name.textContent = "Ms. " + getName.value;
  }

  let sports = document.createElement("p");
  let listOfSport = "";
  for (let sport of getSports) {
    if (sport.checked) {
      listOfSport += sport.value + ", ";
    }
  }
  sports.textContent = "interests: " + listOfSport;

  let message = document.createElement("p");
  message.textContent = getQuote.value;

  card.appendChild(name);
  card.appendChild(sports);
  card.appendChild(message);

  result.appendChild(card);
}

// Add event =========================================
const btn_submit = document.querySelector("#submit");
btn_submit.addEventListener("click", createNewStudent);

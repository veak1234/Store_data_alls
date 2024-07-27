// DOMS ELEMENTS  ---------------------------------------------------------
let dom_questions_view = document.querySelector("#questions-view");

// DATA  ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];

// HIDE / SHOW ---------------------------------------------------------
function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}

//  LOCAL STORAGE ---------------------------------------------------------
function saveQuestions() {
  localStorage.setItem("questions", JSON.stringify(questions));
}

function loadQuestions() {
  let questionsStorage = JSON.parse(localStorage.getItem("questions"));
  if (questionsStorage !== null) {
    questions = questionsStorage;
    console.log(questions)
  }
}

//  EDIT ---------------------------------------------------------

function renderQuestions() {
  // 1 - Remove the card container and create a new one
  let container = document.querySelector("#questions-container");
  container.remove()
  // console.log(container)
  let question_container =  document.createElement("div");
  question_container.setAttribute("id", "questions-container");
  dom_questions_view.appendChild(question_container);  
  console.log(dom_questions_view)

  // 2 - For all questions,  create a new div (class : item), and append it the container
  for(i=0; i<questions.length; i++) {
  
    let vlaue = questions[i]; //get value form array

    let card = document.createElement("div");
    card.className = ("card");
    card.dataset.i = i;

    let questions_infor = document.createElement ("div");
    questions_infor.className = ("questions-infor");

    let span = document.createElement("div");
    span.className = ("title");
    span.textContent = vlaue.title; /// access by key in array

    // append element
    questions_infor.appendChild(span);
    card.appendChild(questions_infor);
    question_container.appendChild(card);


    ///action card
    let action = document.createElement("div");
    action.className = "actions";

    let img1 = document.createElement("img");
    img1.src = "../../img/trash.png"
    let img2 = document.createElement("img");
    img2.src = "../../img/edit.svg"
    action.appendChild(img1);
    action.appendChild(img2);
    card.appendChild(action);
  }
}




function editQuestion(event) {}

function removeQuestion(event) {
  //  Get index from the dataset
  let index = event.target.parentElement.parentElement.dataset.index;

  // TODO Remove question at given index

  // TODO changes to local storage

  // TODO Update the view
}

// MAIN  ---------------------------------------------------------
saveQuestions();

loadQuestions();

renderQuestions();

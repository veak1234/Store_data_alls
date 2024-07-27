// DOMS ELEMENTS  ---------------------------------------------------------
const dom_questions_view = document.querySelector("#questions-view");

const dom_questions_dialog = document.querySelector("#questions-dialog");

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
  loadQuestions(); 
  // Remove the card container and create a new one
  let dom_questions_container = document.querySelector("#questions-container");
  dom_questions_container.remove();
  
  dom_questions_container = document.createElement("div");
  dom_questions_container.id = "questions-container";
  dom_questions_view.appendChild(dom_questions_container);

  // 2 - For all questions,  create a new div (class card), and append it the container
  for (let index = 0; index < questions.length; index++) {
    let question = questions[index];

    let card = document.createElement("div");
    card.className = "card";
    card.dataset.index = index;
    // console.log(card.dataset.index=index)
    dom_questions_container.appendChild(card);

    let questionInfos = document.createElement("div");
    questionInfos.className = "question-info";
    card.appendChild(questionInfos);

    // Create spans for title and author
    let title = document.createElement("span");
    title.className = "title";
    title.textContent = question.title;
    questionInfos.appendChild(title);

    let actions = document.createElement("div");
    actions.className = "actions";
    card.appendChild(actions);

    let editAction = document.createElement("img");
    editAction.src = "../../img/edit.svg";
    editAction.addEventListener("click", editQuestion);
    actions.appendChild(editAction);

    let trashAction = document.createElement("img");
    trashAction.src = "../../img/trash.png";
    trashAction.addEventListener("click", removeQuestion);
    actions.appendChild(trashAction);
  }
}

function editQuestion(event) {
  buttonCreate.textContent="Edit";
  
  let index = event.target.parentElement.parentElement.dataset.index; // index of the question
  console.log(index);
  document.getElementById("title").value = questions[index].title;
  document.getElementById("choiceA").value = questions[index].choiceA;
  document.getElementById("choiceB").value = questions[index].choiceB;
  document.getElementById("choiceC").value = questions[index].choiceC;
  document.getElementById("choiceD").value = questions[index].choiceD;

  // questions.splice(index, 1); // show question the last index
  show(dom_questions_dialog);
  loadQuestions();
}

function removeQuestion(event) {
  //  Get index
  let index = event.target.parentElement.parentElement.dataset.index;

  // Remove question
  questions.splice(index, 1);

  // Save to local storage
  saveQuestions();

  // Update the view
  renderQuestions();
}

function onAddQuestion() {
  // TODO : when clicking on ADD button, display the dialog
  buttonCreate.textContent="Create";
  show(dom_questions_dialog);
}
let addButton = dom_questions_view.firstElementChild;
addButton.addEventListener("click",onAddQuestion);



function onCancel(e) {
  // TODO : when clicking on ADD button, hide the dialog
  hide(dom_questions_dialog);
}


function onCreate() {
  // TODO : when clicking on CREATE button :
  // 1- Hide the dialog
  hide(dom_questions_dialog);
  // 2- Create a new question with the dialog form values
  newCreateQuestion  = {};
  newCreateQuestion.title = document.getElementById("title").value;
  newCreateQuestion.choiceA = document.getElementById("choiceA").value;
  newCreateQuestion.choiceB = document.getElementById("choiceB").value;
  newCreateQuestion.choiceC = document.getElementById("choiceC").value;
  newCreateQuestion.choiceD = document.getElementById("choiceD").value;

  questions.push(newCreateQuestion);
  saveQuestions(); //save questions on localStorage
  renderQuestions(); // for get display newCreateQuestion
  clearFormValues() // fro clear values form after create product
}

function clearFormValues(){
  document.getElementById("title").value =" ";
  document.getElementById("choiceA").value = "";
  document.getElementById("choiceB").value = "";
  document.getElementById("choiceC").value = "";
  document.getElementById("choiceD").value = "";
}

let button = dom_questions_dialog.querySelectorAll('button');
let buttonCancle = button[0];
buttonCancle.addEventListener("click" ,onCancel);
let buttonCreate = button[1];
buttonCreate.addEventListener("click" ,onCreate);
// console.log(buttonCreate);



// MAIN  ---------------------------------------------------------
// saveQuestions();  ///call fucton inside fucntion 
renderQuestions();


// function getRadioValue(radios){
//     resuld = '';

//     for(let i=0 ; i<radios.length; i++){
//         if(radios[i].chacked){
//             return radios[i].value;
//         };
//     };
    
// };

// function getCheckboxValue(checkboxes) {

//     let values = [];
//     for (let i = 0; i < checkboxes.length; i++){
//         if (checkboxes[i].checked) {
//             values.push(checkboxes[i].value);
//         };
//     };
//     return values.join(' ; ');
    
// };

function submitSurvey() {
    let One = getRadioValue(questionOne);
    let Two = getRadioValue(questionTwo);
    let Three = getCheckboxValue(questionThree);
    let Four = getCheckboxValue(questionFour);

    answerOne.textContent = One;
    answerTwo.textContent = Two;
    answerThree.textContent = Three;
    answerFour.textContent = Four;

};

let questionOne = document.querySelectorAll('input[name="q_1"]');
let questionTwo = document.querySelectorAll('input[name="q_2"]');
let questionThree = document.querySelectorAll('input[name="q_2"]');
let questionFour = document.querySelectorAll('input[name="q_2"]');

let answerOne = document.querySelector('#quality');
let answerTwo = document.querySelector('#taste');
let answerThree = document.querySelector('#chef');
let answerFour = document.querySelector('#canteen');

const submitButton = document.querySelector('#submit');
const questionContainer = document.querySelector('.form-container');
const resultContainer = document.querySelector('.result-container');

submitButton.addEventListener('clich' , (e) =>{
    e.preventDefault();
    resultContainer.classList.remove('hide');
    questionContainer.classList.add('hide');
    submitSurvey();

});




function getRadioValue(radios) {
    // TODO: get Radio value from radios array
    restl=''
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        };
    };
    return null; // Return null if no radio button is selected
};

function getCheckboxValue(checkboxes) {
// TODO: get Check box value from checkboxes array
// Return value example: red, orange, purple
// remove the last charector by slice(0, -1) 
    let values = [];
    for (let i = 0; i < checkboxes.length; i++){
        if (checkboxes[i].checked) {
            values.push(checkboxes[i].value);
        }
    }
    return values.join(' ; '); // Return comma-separated values
    
};

function submitSurvey() {
    let qOne = /*TODO; */ getRadioValue(questionOne);
    let qTwo = /*TODO; */ getRadioValue(questionTwo);
    let qThree =/*TODO */ getCheckboxValue(questionThree);
    let qFour = /*TODO; */ getCheckboxValue(questionFour);

    answerOne.textContent = qOne;
    answerTwo.textContent = qTwo;
    answerThree.textContent = qThree;
    answerFour.textContent = qFour;
};

// Main
const questionOne = document.querySelectorAll('input[name="q_1"]');
const questionTwo = document.querySelectorAll('input[name="q_2"]');
const questionThree = document.querySelectorAll('.chef');
const questionFour = document.querySelectorAll('.canteen');

const answerOne = document.querySelector('#quality')
const answerTwo = document.querySelector('#taste')
const answerThree = document.querySelector('#chef')
const answerFour = document.querySelector('#canteen')

const submitButton = document.querySelector('#submit');
const questionContainer = document.querySelector('.form-container');
const resultContainer = document.querySelector('.result-container');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    resultContainer.classList.remove('hide');
    questionContainer.classList.add('hide');
    submitSurvey();
});
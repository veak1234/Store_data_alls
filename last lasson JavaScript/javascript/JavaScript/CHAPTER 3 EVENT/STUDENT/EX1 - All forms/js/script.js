// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------
function submitData() {
  // 1- get values from forms
  // TODO
  let user = document.querySelector("#username").value;
  let email = document.querySelector("#email").value;
  let sex = document.getElementsByName("genderSelect");
  let result=""
  for (let values of sex){
    if(values.checked){
      result+=values.value;
    }
  }
  let seclection = document.querySelector("#fruit").value;
  let listSubjects = document.querySelectorAll(".subject");
  let name = ""
  for(let subject of listSubjects){
    if(subject.checked){
      name += subject.value+", ";
    }
  }
  let sms = document.querySelector("#sms").value;
  // 2- change labels on right side
  // TODO
  document.querySelector("#getUsername").textContent=user;
  document.querySelector("#getEmail").textContent=email;
  document.querySelector("#getGender").textContent=result;
  document.querySelector("#getFruit").textContent=seclection;
  document.querySelector("#getSubject").textContent=name;
  document.querySelector("#getMessage").textContent=sms;
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------
let applyButton = document.getElementById("applyButton");
applyButton.addEventListener("click", submitData);

let getinput = document.querySelector("input[type=radio]");
// getinput.value;
console.log(getinput.value);
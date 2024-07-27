const inputs = document.querySelectorAll("input");
inputs.forEach((e) => e.addEventListener("input", subtract));

function subtract() {
  // delete any non-numeric character .... 
  inputs[0].value = inputs[0].value.replace( /[^0-9]/ , '' );
  inputs[1].value = inputs[1].value.replace( /[^0-9]/ , '' );
  
  if (inputs[0].value > 0 && inputs[1].value > 0)
    inputs[2].value = inputs[1].value - inputs[0].value;
  else inputs[2].value = "";
}
let dom_name = document.querySelector("#name");
let gender = document.querySelector("#gender");
let checkbox = document.querySelectorAll("#sport");
let dom_message = document.querySelector("#message");
let dom_result = document.querySelector("#result");

function dispalyCard(){
    getFemale = "";
    event.preventDefault();
    for(let value of gender){
        if(value.selected){
            if(value.value === "Female"){
                getFemale = value.value;
            }
        }
    }

    result = " ";
    for(let value of checkbox){
        if(value.checked){
            result+=value.value;
        }
    }


    if(getFemale){
        let femaleCard = document.createElement("div");
        femaleCard.className = "card female";
        dom_result.appendChild(femaleCard);

        let name = document.createElement("h1");
        name.textContent = "Ms. " + dom_name.value;
        femaleCard.appendChild(name);
        
        let sport =  document.createElement("p");
        sport.textContent ="interests :" + result;
        femaleCard.appendChild(sport);
        
        let message =  document.createElement("p");
        message.textContent = dom_message.value;
        console.log(message);
        femaleCard.appendChild(message);
    }else{
        let femaleCard = document.createElement("div");
        femaleCard.className = "card male";
        dom_result.appendChild(femaleCard);

        let name = document.createElement("h1");
        name.textContent ="Mr. " + dom_name.value;
        femaleCard.appendChild(name);
        
        let sport =  document.createElement("p");
        sport.textContent ="interests :" + result;
        femaleCard.appendChild(sport);
        
        let message =  document.createElement("p");
        message.textContent = dom_message.value;
        console.log(message);
        femaleCard.appendChild(message);
    }
}

let submit =  document.querySelector("#submit");
submit.addEventListener("click",dispalyCard);
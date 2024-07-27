let detail = document.querySelector("#detail");
// console.log(detail);
let result = document.querySelector("#result");

let users = [
    {
      "name": "Madden Medina",
      "gender": "male",
      "company": "BOINK",
      "email": "maddenmedina@boink.com",
      "phone": "+1 (808) 442-3969",
      "address": "486 Jerome Avenue, Staples, American Samoa, 2014"
    },
    {
      "name": "Graves Talley",
      "gender": "male",
      "company": "CEDWARD",
      "email": "gravestalley@cedward.com",
      "phone": "+1 (974) 449-3500",
      "address": "807 Bristol Street, Bascom, Oklahoma, 4102"
    },
    {
      "name": "Parks Greene",
      "gender": "male",
      "company": "ASSISTIA",
      "email": "parksgreene@assistia.com",
      "phone": "+1 (898) 550-2421",
      "address": "392 Schenck Place, Taft, Virginia, 2053"
    },
    {
      "name": "Georgina Bray",
      "gender": "female",
      "company": "GOKO",
      "email": "georginabray@goko.com",
      "phone": "+1 (870) 516-2040",
      "address": "470 Taylor Street, Forbestown, District Of Columbia, 9290"
    },
    {
      "name": "Hoover Lindsey",
      "gender": "male",
      "company": "WAZZU",
      "email": "hooverlindsey@wazzu.com",
      "phone": "+1 (942) 432-2941",
      "address": "389 Herkimer Court, Beaulieu, Colorado, 2949"
    }
  ];


function createCard(){
  for(let index=0;index<users.length;index++){
    let user = users[index];

    let card =document.createElement("div");
    card.dataset.index = index;
    card.className = "card";
    console.log(card);
    let usernName = document.createElement("h2");
    usernName.textContent = user.name;

    let email = document.createElement("p");
    email.textContent = user.email;

    let phoneNumber = document.createElement("p");
    phoneNumber.textContent = user.phone;

    let company =  document.createElement("p");
    company.textContent = user.company;

    // card.appendChild(usernName);
    // card.appendChild(email);
    // card.appendChild(phoneNumber);
    // card.appendChild(company);
    
    card.addEventListener("click",dispalyDetail);

    result.appendChild(card);
    console.log(result);
}
}

function dispalyDetail(event){
  let index = event.target.dataset.index;
  console.log(index);
 
}
createCard();

//  ===========================================
// CONSTANT
//  ===========================================
const users = [
  {
    name: "Madden Medina",
    gender: "male",
    company: "BOINK",
    email: "maddenmedina@boink.com",
    phone: "+1 (808) 442-3969",
    address: "486 Jerome Avenue, Staples, American Samoa, 2014",
  },
  {
    name: "Graves Talley",
    gender: "male",
    company: "CEDWARD",
    email: "gravestalley@cedward.com",
    phone: "+1 (974) 449-3500",
    address: "807 Bristol Street, Bascom, Oklahoma, 4102",
  },
  {
    name: "Parks Greene",
    gender: "male",
    company: "ASSISTIA",
    email: "parksgreene@assistia.com",
    phone: "+1 (898) 550-2421",
    address: "392 Schenck Place, Taft, Virginia, 2053",
  },
  {
    name: "Georgina Bray",
    gender: "female",
    company: "GOKO",
    email: "georginabray@goko.com",
    phone: "+1 (870) 516-2040",
    address: "470 Taylor Street, Forbestown, District Of Columbia, 9290",
  },
  {
    name: "Hoover Lindsey",
    gender: "male",
    company: "WAZZU",
    email: "hooverlindsey@wazzu.com",
    phone: "+1 (942) 432-2941",
    address: "389 Herkimer Court, Beaulieu, Colorado, 2949",
  },
];

const container = document.querySelector(".container");

// Dispay all users on DOM
function displayAllUsers() {
  document.querySelector("#result").remove();
  let result = document.createElement("div");
  result.className = "col";

  // Loop on all users
  for (let index = 0; index < users.length; index++) {
    let user = users[index];

    // For each user, create a card
    let card = document.createElement("div");
    card.className = "card";
    card.addEventListener("click", function () {
      showDetails(user);
    });
    let h2 = document.createElement("h2");
    h2.textContent = user.name;
    card.appendChild(h2);

    result.appendChild(card);
  }

  container.appendChild(result);
}

// Show information about given user
// @param user
function showDetails(user) {
  document.querySelector("#detail").remove();

  let details = document.createElement("div");
  details.className = "col";
  details.id = "detail";

  let h2 = document.createElement("h2");
  h2.textContent = user.name;

  let email = document.createElement("p");
  email.textContent = "Email: " + user.email;

  let phone = document.createElement("p");
  phone.textContent = "Phone: " + user.phone;

  let company = document.createElement("p");
  company.textContent = "Company: " + user.company;

  let address = document.createElement("p");
  address.textContent = "Address: " + user.address;

  details.appendChild(h2);
  details.appendChild(email);
  details.appendChild(phone);
  details.appendChild(company);
  details.appendChild(address);

  container.appendChild(details);
}

//  ===========================================
// Main
//  ===========================================
displayName();

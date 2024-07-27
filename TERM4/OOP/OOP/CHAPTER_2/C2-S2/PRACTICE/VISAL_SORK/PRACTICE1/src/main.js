// #2 - API URL 

const API_URL = "https://randomuser.me/api";

axios.get(API_URL)
  .then(response => {
    // Your code here...
    let user = response.data.results[0];
    let color = "#0b0a2c";
    if(user.name.title == "Mr"){
      color = "teal";
    }
    else if(user.name.title == "Mrs"){
      color = "purple";
    }
    else if(user.name.title == "Miss"){
      color = "pink";
    }
    cardContainer.style.backgroundColor = color;
    image.src = user.picture.medium

    title.textContent = user.name.title;
    firstname.textContent = user.name.first;
    lastname.textContent = user.name.last;
    
    gender.textContent = user.gender
    phone.textContent = user.phone

  })
  .catch(err => {
    console.log(err);
  })

/**
 * Main 
 * 
 */
const cardContainer = document.querySelector('.card-container');
const firstname = document.querySelector('.firstname');
const lastname = document.querySelector('.lastname');
const title = document.querySelector('.title');
const image = document.querySelector('img');

const phone = document.querySelector('.phone');
const gender = document.querySelector('.gender');
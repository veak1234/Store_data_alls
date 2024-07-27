// Start this project 
// and have a look in the 'Console' and the 'Network' tab in chrome
const studentsContainer = document.getElementById("studentsContainer");

function afterStudentRequest(response) {
  // TODO: Display the list of students in the DOM

  // console.log("response from server:");
  // console.log(response);
  // console.log("data of response:");
  // console.log(response.data);
  let body = document.getElementById('body');

  for (datas of response.data){
    let li1 = document.createElement('h2');
    li1.textContent = datas.name;
    let li2 = document.createElement('li');
    li2.textContent = datas.nickname;
    let li3 = document.createElement('li');
    li3.textContent = datas.class;
    body.appendChild(li1);
    body.appendChild(li2);
    body.appendChild(li3);
    
  }

}

// The URL of the data we want to get
const STUDENT_URL = "data/students.json";

// We use Axios library to do a HTTP request to the server
// Request a GET on STUDENT_URL to get the data from the JSON
// Once done the function 'afterStudentRequest' will be called
axios.get(STUDENT_URL).then(afterStudentRequest);

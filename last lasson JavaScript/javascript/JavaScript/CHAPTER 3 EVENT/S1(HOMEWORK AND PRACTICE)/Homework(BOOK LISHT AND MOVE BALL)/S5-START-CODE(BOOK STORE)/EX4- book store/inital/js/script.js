//  FUNCTIONS -------------------------------------------------------------
function deleteBook(event) {
  // 1- Check the event if raised on the button delete 
  // 2  if yes, get the parent and remove it from the  bookList
  if(event.target.className="delete"){
    let li = event.target.parentElement;// get value form delete
    bookList.removeChild(li);
  }
}

function addBook(event) {
  event.preventDefault();

  // 1- Get the book name from the input field
  let bookValue = document.getElementById("add-book-textfield").value; //get value form input and display on screen

  // 2- Create a new spam bookName for the book name, class name = name
  let bookName = document.createElement("span"); // create class name for store book value 
  bookName.textContent = bookValue;
  bookName.className = "name";
 
  // 3- Create a new spam deleteBtn for the button delete, class name = delete
  let deleteBtn = document.createElement("span"); //create class name for delete
  deleteBtn.textContent = "delete";
  deleteBtn.className = "delete";

  // 4- Create a new li
  let li = document.createElement("li");
  // 5- Add bookName and deleteBtn to li and li to the  bookList UL
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  bookList.appendChild(li);
}
function searchBook(_event) {
  // 1- Get the search text
  let inputText = searchBookInput.value; //recive form main bookssearch input
  console.log(inputText);
  let inputTexLowerCase = inputText.toLowerCase(); // translate to lower case
  // 2- Loop on all LI
  let booksList = document.querySelectorAll("#book-list li"); 

  for (let liItem of booksList) { // booksList name of books examle TomTeav
    let bookTitle = liItem.firstElementChild.textContent.toLowerCase();// get title book || firstElementChild for get text first
    let displayStyle = "";
    if(bookTitle.indexOf(inputTexLowerCase) == -1){
      displayStyle="none"; // display none for name book don't have titile 
    }else{
      displayStyle="block";  // display name book that have title
    }
    liItem.style.display=displayStyle;    // display on screen
  }
}


//  MAIN -------------------------------------------------------------
let bookList = document.querySelector("#book-list ul");
bookList.addEventListener("click", deleteBook);

let addForm = document.getElementById("add-book");
addForm.addEventListener("submit", addBook);

let searchBookInput = document   //get information form input 
  .getElementById("search-books")
  .querySelector("input");
searchBookInput.addEventListener("keyup", searchBook);

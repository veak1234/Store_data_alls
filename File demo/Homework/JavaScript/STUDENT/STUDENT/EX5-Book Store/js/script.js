//  FUNCTIONS -------------------------------------------------------------
function deleteBook(event) {

// 1- Check the event if raised on the button delete
  if (event.target.classList.contains("delete")) {

    // 2. Get the parent element (list item)
    const bookItem = event.target.parentElement;

    // 3. Get the parent element of the bookItem (book list)
    const bookList = bookItem.parentElement;
    
    // 4. Remove the bookItem from the bookList
    bookList.removeChild(bookItem);

  };

};

function addBook(event) {

  event.preventDefault();

  // 1- Get the book name from the input field
  let name = document.getElementById("add-book-textfield").value;
  
  // 2- Create a new spam bookName for the book name, class name = name  
  let input = document.createElement('span');
  input.classList.add('name');
  input.textContent = name;

  // 3- Create a new spam deleteBtn for the button delete, class name = delete  
    let btn = document.createElement('span');
    btn.className = 'delete';
    btn.textContent='delete';

  // 4- Create a new li
    let item=document.createElement('li');
    item.appendChild(input);
    item.appendChild(btn);

  // 5- Add bookName and deleteBtn to li and li to the  bookList UL
    bookList.appendChild(item);

}

function searchBook(event){
  // 1- Get the search text
  const searchText = event.target.value.toLowerCase();

  // 2- Loop on all LI
  const bookList = document.getElementsByTagName('li');
  for (let i = 0; i < bookList.length; i++) {
    const bookTitle = bookList[i].textContent.toLowerCase();
 
    // Update the style of the LI (visible or hidden)

    if (bookTitle.includes(searchText)) {
      bookList[i].style.display = 'block'; // Show the LI
    } else {
      bookList[i].style.display = 'none'; // Hide the LI
    };

  };
   
};




//  MAIN -------------------------------------------------------------
let bookList = document.querySelector("#book-list ul");
bookList.addEventListener("click", deleteBook);

let addForm = document.getElementById("add-book");
addForm.addEventListener("click", addBook);

let searchBookInput = document
  .getElementById("search-books")
  .querySelector("input");
searchBookInput.addEventListener("keyup", searchBook);



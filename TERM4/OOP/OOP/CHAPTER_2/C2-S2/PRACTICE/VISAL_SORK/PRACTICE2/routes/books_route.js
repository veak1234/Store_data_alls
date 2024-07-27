const express = require('express');

let router = express.Router();

let books = [
    { id: 1, title: "The Lord of the Rings", author: "Tolkien" },
    { id: 2, title: "Hamlet", author: "Shakespeare" },
    { id: 3, title: "Harry Potter", author: "Rowling" },
    { id: 4, title: "Romeo and Juliet", author: "Shakespeare" },
    { id: 5, title: "The Odyssey", author: "Homer" }
];

// TODO: DEFINE THE 4 ROUTES HERE

// Get all the books
router.get('/books', ()=>{
    console.log(books);
})

// Create a new book




// Update one book by id



// Delete books by author




module.exports = router;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("./book");
var library_1 = require("./library");
var author_1 = require("./author");
var publisher_1 = require("./publisher");
// Create author object
var author1 = new author_1.Author("Ronan");
var author2 = new author_1.Author("Him");
// Create Publisher object
var publisher1 = new publisher_1.Publisher("Sipar", "Phnom Penh");
var publisher2 = new publisher_1.Publisher("IBC", "Siem Reap");
// Create book object 
var book1 = new book_1.Book("OOP is the best", 2018);
var book2 = new book_1.Book("Best team?", 2015);
var book3 = new book_1.Book("The Why not book", 2020);
// Add author to the book
book1.addAuthor(author1);
book2.addAuthor(author1);
book3.addAuthor(author2);
// Set publisher to the book
book1.setPublisher(publisher1);
book2.setPublisher(publisher1);
// Create library object 
var library = new library_1.Library("PNC LIBRARY", "Phnom Penh");
// Add books to the library 
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
console.log(library);

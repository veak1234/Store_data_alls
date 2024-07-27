import { Book } from './book';
import { Library} from './library';
import { Author } from './author';
import { Publisher } from './publisher';

// Create author object
let author1 = new Author("Ronan");
let author2 = new Author("Him");

// Create Publisher object
let publisher1 = new Publisher("Sipar", "Phnom Penh");
let publisher2 = new Publisher("IBC", "Siem Reap");

// Create book object 
let book1 = new Book("OOP is the best", 2018);
let book2 = new Book("Best team?", 2015);
let book3 = new Book("The Why not book", 2020);

// Add author to the book
book1.addAuthor(author1);
book2.addAuthor(author1);
book3.addAuthor(author2);

// Set publisher to the book
book1.setPublisher(publisher1);
book2.setPublisher(publisher1);

// Create library object 
let library = new Library("PNC LIBRARY", "Phnom Penh");

// Add books to the library 
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log(library);



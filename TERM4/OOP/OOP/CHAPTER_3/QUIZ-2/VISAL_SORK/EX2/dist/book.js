"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, yearOfPublished) {
        this.authors = [];
        this.title = title;
        this.yearOfPublished = yearOfPublished;
    }
    // Add an author to the book 
    Book.prototype.addAuthor = function (author) {
        this.authors.push(author);
    };
    // Set publisher of book 
    Book.prototype.setPublisher = function (publisher) {
        this.publisher = publisher;
    };
    return Book;
}());
exports.Book = Book;

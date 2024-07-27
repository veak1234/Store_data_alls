"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(name, address) {
        this.books = [];
        this.name = name;
        this.address = address;
    }
    // Add a book to library 
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    // Get all books from an author  
    Library.prototype.getBooksFrom = function (author) {
        var allBooks = [];
        this.books.forEach(function (book) {
            book.authors.forEach(function (writer) {
                if (writer.name === author.name) {
                    allBooks.push(book);
                }
            });
        });
        return allBooks;
    };
    // Get all books from an author  
    Library.prototype.getAllBooksFrom = function (publisher) {
        var allBooks = [];
        this.books.forEach(function (book) {
            if (book.publisher != undefined) {
                if (book.publisher.name == publisher.name) {
                    allBooks.push(book);
                }
            }
        });
        return allBooks;
    };
    return Library;
}());
exports.Library = Library;

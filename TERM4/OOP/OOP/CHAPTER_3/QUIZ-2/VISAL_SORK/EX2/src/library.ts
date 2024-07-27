import { Book } from './book';
import { Author } from './author';
import { Publisher } from './publisher';

export class Library {
    private name : string;
    private address : string;
    private books : Book[] = [];

    constructor(name : string, address : string){
        this.name = name;
        this.address = address;
    }

    // Add a book to library 
    public addBook(book : Book):void{
        this.books.push(book);
    }

    // Get all books from an author  
    public getBooksFrom(author: Author):Book[]{
        let allBooks:Book[] = [];
        this.books.forEach(book=>{
            book.authors.forEach(writer=>{
                if(writer.name === author.name){
                    allBooks.push(book);
                }
            })
        })
        return allBooks;
    }

    // Get all books from an author  
    public getAllBooksFrom(publisher: Publisher):Book[]{
        let allBooks:Book[] = [];
        this.books.forEach(book=>{
            if(book.publisher != undefined){
                if(book.publisher.name ==publisher.name ){
                    allBooks.push(book)
                }
            }
        })
        return allBooks;
    }
}
import { Author } from './author';
import { Publisher } from './publisher';

export class Book {
    private title : string;
    private yearOfPublished : number;
    public authors : Author[] = [];
    public publisher? : Publisher;

    constructor(title : string, yearOfPublished : number){
        this.title = title;
        this.yearOfPublished = yearOfPublished;
    }

    // Add an author to the book 
    public addAuthor(author : Author):void{
        this.authors.push(author);
    }
    // Set publisher of book 
    public setPublisher(publisher:Publisher):void{
        this.publisher = publisher;
    }
  
    
}
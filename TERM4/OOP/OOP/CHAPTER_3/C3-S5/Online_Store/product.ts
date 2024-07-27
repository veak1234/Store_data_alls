import { Feedback } from "./feedback";

export class Product{
    name:string;
    price:number;
    feedbacks?:Feedback[];

    constructor(name:string, price:number){
        this.name = name;
        this.price = price
    }

    // Method Add Feedback 
    addFeedback(feedbacks:Feedback[]):void{
       this.feedbacks=feedbacks
    }

    // Get price 
    getPrice():number{
        return this.price;
    }
}
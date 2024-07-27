import { Customer } from "./customer";

export class Feedback{
    comment:string;
    evaluation:number;
    customer?:Customer

    constructor(comment:string, evaluation:number){
        this.comment = comment;
        this.evaluation = evaluation
    }

    // Method set customer of a feedback 
    setCustomerFeedback(customer:Customer):void{
        this.customer = customer
    }

    // Get comment 
    getComment():string{
        return this.comment;
    }
}
export class Customer {
    firstName:string;
    lastName:string;

    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName
    }

    // Get FirstName 
    getFirstName():string{
        return this.firstName;
    }

    // Get FirstName 
    getLastName():string{
        return this.lastName;
    }

}
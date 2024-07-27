
export class User {
    
    constructor(private firstName : string, private lastName : string){};

    // Get firstName 
    public get getFirstName():string{
        return this.firstName;
    }

    // Get lastName 
    public get getlastName():string{
        return this.lastName;
    }
}
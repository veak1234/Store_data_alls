
export class Student{
    private firstName:string;
    private lastName:string;

    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFullName():string{
        return this.firstName + this.lastName;
    }
}
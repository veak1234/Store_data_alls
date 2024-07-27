export class Person{
    private name : string;
    private address : string;
    private date_of_birth : string;

    constructor(name : string, address : string, date_of_birth : string){
        this.name = name;
        this.address = address;
        this.date_of_birth = date_of_birth;
    }

    get getName(){
        return this.name;
    }
}
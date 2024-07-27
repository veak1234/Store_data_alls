import { Person } from './person';

export class Employee extends Person{
    private salary : number;

    constructor(name : string, address : string, date_of_birth : string,salary : number){
        super(name, address, date_of_birth);
        this.salary = salary;
    }
}
import { Employee } from './employee';
import { Person } from './person';

export class Manager extends Employee {
    private skill : string;

    constructor(name : string, address : string, date_of_birth : string,salary : number, skill :string){
        // super(name, address, date_of_birth, salary);
        super();
        this.skill = skill;
    }
}
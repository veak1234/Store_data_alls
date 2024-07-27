import { Employee } from './employee';

export class Doctor extends Employee {
    private medical : string;

    constructor(name : string, address : string, date_of_birth : string,salary : number, medical:string){
        super(name, address, date_of_birth, salary);
        this.medical = medical;
    }
}
import { Employee } from './Employee';

export class Manager extends Employee {
    private skill : string;

    constructor(name: string, address: string, dateBirth: string, salary: number, skill : string){
        super(name, address, dateBirth, salary);
        this.skill = skill;
    }
}
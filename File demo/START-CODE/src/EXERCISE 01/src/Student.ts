
import {Persons} from './Person';

export class Student extends Persons{
    constructor(name:string, age:number, private phone:string){
        super(name,age);
        this.phone = phone;
    }
    getPhone():string{
        return this.phone;
    }
}

let Students = new Student("Veak",15,"2912832");

console.log(Students)
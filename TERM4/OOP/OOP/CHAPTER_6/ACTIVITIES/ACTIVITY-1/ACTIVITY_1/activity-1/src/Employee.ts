import { Person } from './Person';

export class Employee extends Person {
    salary: number;

    constructor(name: string, address: string, dateBirth: string,salary: number) {
      super(name, address, dateBirth);
      this.salary = salary;
    }
  }
  
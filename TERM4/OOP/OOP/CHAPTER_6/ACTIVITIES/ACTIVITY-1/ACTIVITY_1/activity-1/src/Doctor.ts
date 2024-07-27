import { Employee } from './Employee';

export class Doctor extends Employee {
    medicalBranch: string;
  
    constructor(name: string, address: string, dateBirth: string, salary: number, medicalBranch: string) {
      super(name, address, dateBirth, salary);
      this.medicalBranch = medicalBranch;
    }
  }
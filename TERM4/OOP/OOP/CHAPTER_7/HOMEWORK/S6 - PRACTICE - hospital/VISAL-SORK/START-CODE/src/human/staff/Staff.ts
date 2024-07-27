import { Gender, Person } from "../Person";

export enum StaffCategory {
  DOCTOR = "DOCTOR",
  NURSE = "NURSE",
  SECRETARY = "SECRETARY",
}

/**
 * A staff is a person of the hospital with a salary
 */
export class Staff extends Person {
  protected salary: number = 0; // by default

  constructor(
    protected category: StaffCategory,
    name: string,
    age: number,
    gender: Gender
  ) {
    super(name, age, gender);
  }

  setSalary(salary: number) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
  
  getCategory() {
    return this.category;
  }
}

class Contract {}

abstract class Employee {
  constructor(protected name: string, protected employeeType: string) {}

  abstract salary(): number;
}

class Manager extends Employee {
  private employees: Employee[] = [];

  constructor(name: string, employeeType: string) {
    super(name, employeeType);
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  salary(): number {
    return this.employees.length * 600;
  }
}

class Developer extends Employee {
  private skills: string[] = [];

  constructor(name: string, employeeType: string) {
    super(name, employeeType);
  }

  addSkill(skill: string) {
    this.skills.push(skill);
  }

  salary(): number {
    let salary: number = this.skills.length * 500;
    if (this.skills.includes("OOP")) {
      salary += 200;
    }
    return salary;
  }
}
const manager = new Manager("John", "Manager");
const developer = new Developer("Alice", "Developer");

manager.addEmployee(developer);

developer.addSkill("OOP");

console.log(manager.salary()); // Output: 1200
console.log(developer.salary()); // Output: 1000

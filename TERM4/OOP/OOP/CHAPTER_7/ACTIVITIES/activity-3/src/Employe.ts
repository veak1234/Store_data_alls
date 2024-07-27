class Contract {}

abstract class Employee {
  /**
   * @param name  employee name
   * @para can be either "DEVELOPPER" or "MANAGER" or "COMERCIAL"
   */
  constructor(private name: string) {}

  abstract getSalary(): number ;
}

// Class Comercial 
class Comercial extends Employee {
    private contracts: Contract[] = [];

    constructor(name:string, constracts:Contract[]){
      super(name)
      this.contracts = constracts;
    }

    // Get salary 
    getSalary(): number {
      return this.contracts.length*400;
    }
}

// Class Manager 
class Manager extends Employee {
   private teamMembers: Employee[] = [];

   constructor(name: string, teamMembers : Employee[]){
    super(name);
    this.teamMembers = teamMembers;
   }

  //  Get salary 
   getSalary(): number {
      return this.teamMembers.length*600;
    }
}

class Developer extends Employee {
  private skills: String[] = [];

  constructor(name: string, skills : String[]){
    super(name);
    this.skills = skills;
  }

  // Get salary 
   getSalary(): number {
    let salary : number =this.skills.length * 500;
    if(this.skills.includes("OOP")){
      salary =+ 2000
    }
    return salary;
  }

}



// We use the super

class Preson {
    name: string;
    address: string;

    constructor(name: string, address: string){
        this.name = name;
        this.address = address;
    };
};

class Employee extends Preson{
    salary: number;

    constructor(name: string, address: string, salary: number){
        super(name, address);
        this.salary =  salary;
    };
};

console.log(new Employee("Veak","paris", 500))

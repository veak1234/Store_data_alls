class Employee {
    name:string;
    city:string;
    yearInComapany:number = 0;

    constructor(name:string, city:string){
        this.name = name;
        this.city = city;
    }
}

let newEmployee = new Employee("roann", "paris", );
console.log(newEmployee)
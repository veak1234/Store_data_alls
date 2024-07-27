
// =...we use the child class...=//

class Preson{
    name: string = "Veak";
    address: string = "PNC";
};

class Employee extends Preson{
    salary = 1000;
};

let veak = new Employee();
console.log(veak);


class Alumni{
    VueJS: string;
    NodeJS: string;
    OOP: string;
    Salary: number

    constructor(VueJS: string, NodeJS: string, OOP: string, Salary: number){
        this.VueJS = VueJS;
        this.NodeJS = NodeJS;
        this.OOP = OOP;
        this.Salary = Salary;
    };

    // getSalary() : number{            
    //     return this.Salary;
    // };

    getSalary(): number|string {
        if (this.Salary === 250) {
            return 1/2 + " year experience in VueJS " + 1/2 + 
            " year experience in VueJS Can’t code in OOP " + 
            this.Salary;
        }
        if (this.Salary === 350) {
            return 2/2 + " year experience in VueJS " + 1/2 + 
            " year experience in VueJS Can’t code in OOP " + 
            this.Salary;
        }
        if (this.Salary === 450) {
            return 2/1 + " year experience in VueJS " + 2/1 + 
            " year experience in VueJS Cannot code in OOP " + 
            this.Salary;
        }else{
            return 2/1 + " year experience in VueJS " + 2/1 + 
            " year experience in VueJS Can code in OOP " + 
            this.Salary; 
        };
    };
};

let run1 = new Alumni("Less than a year", "Less than a year", "no", 250);
let run2 = new Alumni("more than a year", "Less than a year", "no", 350);
let run3 = new Alumni("more than a year", "more than a year", "no", 450);
let run4 = new Alumni("more than a year", "more than a year", "yes", 700);

console.log(run1.getSalary())
console.log(run2.getSalary())
console.log(run3.getSalary())
console.log(run4.getSalary())

// console.log("0.5 year experience in VueJS 0.5 year experience in VueJS Can’t code in OOP ",run1.getSalary());
// console.log("1 year experience in VueJS 0.5 year experience in VueJS Can’t code in OOP ",run2.getSalary());
// console.log("2 year experience in VueJS 2 year experience in VueJS Cannot code in OOP ",run3.getSalary());
// console.log("2 year experience in VueJS 2 year experience in VueJS Can code in OOP ",run4.getSalary());



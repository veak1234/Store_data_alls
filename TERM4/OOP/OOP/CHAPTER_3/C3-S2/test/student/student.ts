import { Computer } from "./computer";
import { Province } from "./province";
import { District } from './district';


class Student{
    name:string;
    age:number;
    computer?: Computer;
    province:Province;

    constructor(name:string,age:number, province:Province) {
        this.name = name;
        this.age = age;
        this.province = province;
    }

    addComputer(computer:Computer) {
        this.computer = computer;
    }
}

// Create Province object 
let battambang = new Province("BTB", [new District("Sankae"), new District("Tahen"), new District("Norea")]);

// Create Computer object 
let macBook = new Computer("Macbook Air M1 Chip", "Apple");

// Create Student object 
let student1 = new Student("Visal", 20, battambang);
student1.addComputer(macBook);
let student2 = new Student("Boy Loy", 19, battambang);

console.log("Student1 : ", student1);
console.log("Student2 : ", student2);






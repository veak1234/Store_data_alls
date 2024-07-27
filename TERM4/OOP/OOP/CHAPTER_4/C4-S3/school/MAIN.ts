import { School } from "./school";
import { Classroom } from "./classroom";
import { Student } from "./student";



let newSchool = new School("PNC");

let classA = new Classroom("A");
let classB = new Classroom("B");

let student1 = new Student("Visal", "Boy Loy");
let student2 = new Student("Visal", "Smart");
let student3 = new Student("Visal", "Good");

classA.addStudent(student1);
classA.addStudent(student2);
classB.addStudent(student3);

newSchool.addClassroom(classA,classB)

console.log(newSchool);
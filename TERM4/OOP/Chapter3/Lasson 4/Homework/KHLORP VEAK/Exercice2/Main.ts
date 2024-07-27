import { Student, Classroom, School } from "./SCHOOL";

let student1 = new Student("Veak", "Khlorp");  // ctreat student in class Student
let student2 = new Student("Rath", "SAMRETH");
let student3 = new Student("chany", "Moe");
let student4 = new Student("SENGHAK", "CHHUN");

let school1 = new School("PNC");  // create school in class school
let school2 = new School("PNC");

let classroom1 = new Classroom(school1, "Wheb A");  // create classroom in classroom
let classroom2 = new Classroom(school2, "Wheb A");

classroom1.addStudent(student1);
classroom1.addStudent(student2);
classroom1.addStudent(student3);
classroom1.addStudent(student4);

classroom2.addStudent(student1);
classroom2.addStudent(student2);
classroom2.addStudent(student4);

let numberOfStudents1 = classroom1.getNumberOfStudents();
let numberOfStudents2 = classroom2.getNumberOfStudents();

console.log("Students in the one classroom: ", numberOfStudents1);
console.log("Students in the tow classroom: ", numberOfStudents2);

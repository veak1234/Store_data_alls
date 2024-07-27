import { Student } from "./student";

export class Classroom{
    className: string;
    students: Student[]=[];

    constructor(name: string){
        this.className = name;
    }

    public addStudent(student:Student):void{
        this.students.push(student);
    }
    public getNumberOfStudent():number{
        return this.students.length;
    }
}
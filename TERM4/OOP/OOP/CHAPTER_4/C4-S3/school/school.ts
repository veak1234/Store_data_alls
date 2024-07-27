import { Classroom } from "./classroom";


export class School {
    private schoolName: string;
    classrooms : Classroom[] = [];

    constructor(name: string) {
        this.schoolName = name;
    }

    public addClassroom(...classrooms:Classroom[]):void{
        for(let classroom of classrooms){
            this.classrooms.push(classroom);
        }
    }
}
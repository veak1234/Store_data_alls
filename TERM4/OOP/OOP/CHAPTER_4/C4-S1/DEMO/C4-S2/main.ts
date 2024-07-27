class Classroom {
    private name : string
    private color: string

    constructor(name:string, color:string){
        this.name = name
        this.color = color
    }

    getColor():string{
        return this.color;
    }
    getName():string{
        return this.name;
    }
}

class Student {
    name:string
    room:Classroom

    constructor(name:string){
        this.name = name
        this.room = new Classroom("PNC", "blue");
    }
}

let newClassroom = new Classroom("PNC", "red");
console.log(newClassroom);

let newStudent = new Student("Sal")
console.log(newStudent.room);

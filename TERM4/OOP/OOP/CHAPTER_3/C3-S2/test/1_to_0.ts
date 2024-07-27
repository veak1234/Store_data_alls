class Pen{
    color: string;

    constructor(color: string){
        this.color = color;
    }
}

class Teacher{
    name:string;
    age:number;
    pen?:Pen;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    addPen(pen:Pen){
        this.pen =pen;
    }
}

let redPen = new Pen("red");
let student1= new Teacher("Sal", 20);
let student2= new Teacher("Sal2", 19);

// add pen
student1.addPen(redPen);

console.log("Student1 :", student1);
console.log("Student2 :", student2);
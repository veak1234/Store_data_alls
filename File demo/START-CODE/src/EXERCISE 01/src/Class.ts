import {Student} from './Student'

export class Classe{
    private Student: Student[] = [];
    static getAddStudent: any;
    
    constructor(private name:string){}
    getName():string{
        return this.name;
    }
    setName(name:string):void{
        this.name = name;
    }
    getAddStudent(Student: Student){
        this.Student.push(Student);
    }
    
}
let Students= new Student("Veak",29,"20");
let Clase = new Classe("WEB A");
Clase.getAddStudent(Students)

// console.log(Clase)

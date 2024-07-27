
import {Classe} from './Class';

export class School {
    private name: string;
    private Classe: Classe[] =[];

    constructor(name: string){
        this.name = name;
    }
    getName(): string{
        return this.name;
    }
    getAddClass(Classe: Classe){
        this.Classe.push(Classe);
    }
}

let Class = new Classe("WEB A");
let Schools= new School("PNC");
Schools.getAddClass(Class);

// console.log(Schools)
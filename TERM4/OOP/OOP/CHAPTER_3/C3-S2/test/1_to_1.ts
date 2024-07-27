class Director{
    name: string;
    age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

class School{
    name:string;
    director:Director;

    constructor(name:string, director:Director){
        this.name = name;
        this.director = director;
    }
}

let salDirector = new Director("Sal", 20);
let pnc = new School("PNC", salDirector);

console.log(pnc);
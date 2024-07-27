export class Student {
    private name : string;
    constructor(name : string){
        this.name = name;
    }

    public isEqual(st1 : Student, st2 : Student):boolean{
        return st1.name === st2.name;
        // return JSON.stringify(st1) === JSON.stringify(st2);  // use JSON.stringify to compare only if attribute is in order
    }
}
import { Computer } from "./computer";
import { Desktop } from "./desktop";
export class shop{
    private items?:Computer[]=[]
    constructor(private name:string){
        this.name = name;
    }
    public addComputer(computer:Computer): void{
        this.items.push(computer);
    }

}
import { Chair } from './chair';

export class House {
    private name : string;
    private chairs : Chair[] = [];

    constructor(name: string){
        this.name = name;
    }

    public addChair(chairId : number):Chair{
        let newChair = new Chair(this, chairId);
        this.chairs.push(newChair);
        return newChair;
    }
}

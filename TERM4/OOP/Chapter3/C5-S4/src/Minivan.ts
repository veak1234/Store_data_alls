
import {Vehicle} from './Vehicle';

export class Minivan extends Vehicle{
    private speed: number
    constructor(plateID: string, weight: number) {
        super(plateID, weight);
        this.speed = 5;
    }

    getspeed(): number {
        return this.speed;
    }
}

let minivan = new Minivan('4343-KR', 1);

console.log(minivan);
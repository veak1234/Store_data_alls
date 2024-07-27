
import {Vehicle} from './Vehicle';

export class batMoble extends Vehicle {
    private speed: number;

    constructor(plateID: string, weight: number) {
        super(plateID, weight);
        this.speed = 10;
    }
    getspeed(): number {
        return this.speed;
    }
}

console.log(new batMoble('4141-KSK',3))
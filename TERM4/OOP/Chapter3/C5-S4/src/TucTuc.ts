
import {Vehicle} from './Vehicle';

export class TucTuc extends Vehicle {
    private speed: number;
    static Speed: any;
    constructor(plateID: string, weight: number) {
        super(plateID, weight);
        this.speed = 3;
    }
    getspeed(): number {
        return this.speed;
    }
}

let tucTuc = new TucTuc('4444-KH', 2);

console.log(tucTuc);
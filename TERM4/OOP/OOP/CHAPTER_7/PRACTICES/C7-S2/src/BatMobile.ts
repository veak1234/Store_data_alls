import { Vehicle } from "./Vehicle";

export class BatMobile extends Vehicle {
    private isBatmanHere : boolean;

    constructor(plateID : string, weight : number, isBatmanHere : boolean){
        super(plateID, weight);
        this.isBatmanHere = isBatmanHere;
    }

    get getSpeed(): number {
        let speed : number = 110;
        if(this.isBatmanHere){
            speed = 500;
        }
        return speed
    }
}
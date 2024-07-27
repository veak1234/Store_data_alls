import { Vehicle } from "./Vehicle";

export class TucTuc extends Vehicle {
    private numberOfCustomer : number;

    constructor(plateID : string, weight : number, numberOfCustomer : number){
        super(plateID, weight);
        this.numberOfCustomer = numberOfCustomer;
    }

    get getSpeed(): number {
        let speed : number = 130;
        if(this.numberOfCustomer > 0){
            speed -= this.numberOfCustomer * 5;
        }
        return speed;
    }
}
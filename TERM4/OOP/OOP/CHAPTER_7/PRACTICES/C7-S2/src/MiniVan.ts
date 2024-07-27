import { Vehicle } from "./Vehicle";

export class MiniVan extends Vehicle {
    private numberOfCustomer : number;
    private numberOfLuggage : number;

    constructor(plateID : string, weight : number, numberOfCustomer : number, numberOfLuggage:number){
        super(plateID, weight);
        this.numberOfCustomer = numberOfCustomer;
        this.numberOfLuggage = numberOfLuggage;
    }

    get getSpeed(): number {
        let speed : number = 130;
        if(this.numberOfCustomer > 0 || this.numberOfLuggage > 0){
            speed -= this.numberOfCustomer * 10;
            speed -= this.numberOfLuggage * 5;
        }
        return speed;
    }
}
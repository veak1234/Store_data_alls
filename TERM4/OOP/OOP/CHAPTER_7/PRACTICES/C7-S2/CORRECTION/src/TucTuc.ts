import { Vehicle } from "./Vehicle";
export class TucTuc extends Vehicle {
    private nOfCustomer: number
    constructor(id: string, weight: number, nCustomer: number) {
        super(id, weight);
        this.nOfCustomer = nCustomer
    }
    getSpeed(): number {
        let speed: number = 130
        speed = speed - (this.nOfCustomer * 5)
        return speed
    }
}
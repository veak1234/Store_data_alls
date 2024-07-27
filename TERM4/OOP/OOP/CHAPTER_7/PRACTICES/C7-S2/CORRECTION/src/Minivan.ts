import { Vehicle } from "./Vehicle"


export class Minivan extends Vehicle {
    private numberOfCustomer: number
    private numberOfLuggage: number
    constructor(id: string, weight: number, nCustomer: number, nLuggage: number) {
        super(id, weight)
        this.numberOfCustomer = nCustomer
        this.numberOfLuggage = nLuggage
    }
    getSpeed(): number {
        let speed: number = 130
        speed = speed - ((this.numberOfCustomer * 10) + (this.numberOfLuggage * 5))
        return speed
    }
}
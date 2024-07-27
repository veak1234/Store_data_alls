import { Vehicle } from "./Vehicle"
export class BatMobile extends Vehicle {
    isBatman: boolean
    constructor(plateId: string, weight: number, isBatman: boolean) {
        super(plateId, weight)
        this.isBatman = isBatman
    }
    getSpeed(): number {
        let speed: number
        if (this.isBatman) {
            speed = 500
        } else {
            speed = 110
        }
        return speed
    }
}
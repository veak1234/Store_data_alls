
export class Vehicle {
    constructor(protected plateID: string, protected weight: number){}

    getspeed(): number {
        return this.weight;
    }
}

console.log(new Vehicle('4545-',3))


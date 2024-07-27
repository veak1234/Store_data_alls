export abstract class Vehicle {
    constructor(private plateID : string, private weight : number){};

    abstract get getSpeed():number;
}
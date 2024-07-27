
class Vehicle {
    private _make: string;
    private _model: string;

    constructor(make: string, model: string) {
        this._make = make;
        this._model = model;
    }

    public get make(): string {
        return this._make;
    }

    public set make(make: string) {
        this._make = make;
    }

    public get model(): string {
        return this._model;
    }

    public set model(model: string) {
        this._model = model;
    }

    public drive(): void {
        console.log(`Driving the ${this._make} ${this._model}`);
    }
}

class Car extends Vehicle {
    private _numberOfSeats: number;

    constructor(make: string, model: string, numberOfSeats: number) {
        super(make, model);
        this._numberOfSeats = numberOfSeats;
    }

    public get numberOfSeats(): number {
        return this._numberOfSeats;
    }

    public set numberOfSeats(numberOfSeats: number) {
        this._numberOfSeats = numberOfSeats;
    }

    public display(): void {
        console.log(`This ${this.make} ${this.model} has ${this.numberOfSeats} seats.`);
    }
}

// Creating an instance of the Car class
let myCar = new Car("Toyota", "Camry", 5);

// Accessing inherited properties and methods
console.log("Make:", myCar.make);
console.log("Model:", myCar.model);
myCar.drive();

// Accessing subclass-specific properties and methods
console.log("Number of Seats:", myCar.numberOfSeats);
myCar.display();

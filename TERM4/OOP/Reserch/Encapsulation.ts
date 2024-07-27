
class Car {
    private _make: string; // Private attribute
    private _model: string; // Private attribute

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
}

// Creating an instance of the Car class
let myCar = new Car("Toyota", "Camry");

// Accessing encapsulated attributes using getter methods
console.log("Make:", myCar.make);
console.log("Model:", myCar.model);

// Modifying encapsulated attributes using setter methods
myCar.make = "Honda";
myCar.model = "Accord";

console.log("Updated Make:", myCar.make);
console.log("Updated Model:", myCar.model);

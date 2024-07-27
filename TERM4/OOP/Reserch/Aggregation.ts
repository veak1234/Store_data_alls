
class Engine {
    constructor(private _horsepower: number) {}

    public start(): void {
        console.log("Engine started");
    }

    public stop(): void {
        console.log("Engine stopped");
    }
}

class Car {
    private _make: string;
    private _model: string;
    private _engine: Engine; // Aggregation - Car has a reference to Engine

    constructor(make: string, model: string, engine: Engine) {
        this._make = make;
        this._model = model;
        this._engine = engine;
    }

    public start(): void {
        console.log(`${this._make} ${this._model} is starting...`);
        this._engine.start(); // Delegating start() to the Engine object
    }

    public stop(): void {
        console.log(`${this._make} ${this._model} is stopping...`);
        this._engine.stop(); // Delegating stop() to the Engine object
    }
}

// Creating an instance of the Engine class
const engine = new Engine(200);

// Creating an instance of the Car class with aggregation
const myCar = new Car("Toyota", "Camry", engine);

// Using the Car's start and stop methods
myCar.start(); // Output: Toyota Camry is starting... \n Engine started
myCar.stop(); // Output: Toyota Camry is stopping... \n Engine stopped

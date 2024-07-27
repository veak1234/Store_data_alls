class Vehicle {
    protected manufacturer:string

    constructor(manufacturer:string){
        this.manufacturer = manufacturer
    }

    protected display(){
        console.log("manufacturer");
    }
}

class Car extends Vehicle {
    private model : string

    constructor(manufacturer:string, model:string){
        super(manufacturer);
        this.model = model;
    }

    start():void{
        this.display();
    }
}


let newVehicle = new Vehicle("Toyota");
let newCar = new Car("Dream", "2021");
newCar.start();

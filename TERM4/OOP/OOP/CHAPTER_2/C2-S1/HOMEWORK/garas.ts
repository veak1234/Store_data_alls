import { Car } from './car';

class Garage{
    name:string;
    cars:Car[]=[];

    constructor(name:string){
        this.name = name;
    }

    addCar(cars:Car[]){
        cars.forEach(car=>{
            this.cars.push(car);
        })
    }
}

let car1= new Car("Lamboghini", 1000, "yellow");
let car2= new Car("Roll Roye", 2000, "black");
let car3= new Car("Toyota", 3000, "red");

let garage = new Garage('Sal');
garage.addCar([car1, car2, car3]);
console.log(garage);
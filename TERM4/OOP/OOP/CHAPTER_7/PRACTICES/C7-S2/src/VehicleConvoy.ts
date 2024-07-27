import { Vehicle } from "./Vehicle";

export class VehicleConvoy {
    private vehicles : Vehicle[] = [];

    // Add vehicle 
    addVehicle(vehicle:Vehicle){
        this.vehicles.push(vehicle);
    }

    // Get Max Speed of convoy
    get getMaxSpeed():number{
        let allSpeeds : number[] = [];
        this.vehicles.forEach(vehicle =>{
            allSpeeds.push(vehicle.getSpeed);
        })
        return Math.max(...allSpeeds);
    } 
}
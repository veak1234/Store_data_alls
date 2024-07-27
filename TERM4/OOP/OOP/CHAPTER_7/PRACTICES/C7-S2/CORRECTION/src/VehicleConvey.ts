import { Vehicle } from './Vehicle';

export class VehicleConvey {
    vehicules: Vehicle[] = []
	
    addVehicule(vehicule: Vehicle) {
        this.vehicules.push(vehicule)
    }
    
	
    getMaxSpeed(): number {
        let maxSpeed  = 0;
        for (let vehicule of this.vehicules) {
            if (vehicule.getSpeed() > maxSpeed) {
                maxSpeed = vehicule.getSpeed();
            }
        }
        return maxSpeed;
    }
}
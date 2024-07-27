import { Customer } from './customer';

export class Room {
    public customerRoom : Customer[] = [];
    constructor(public roomId : string, public numberOfBed : number){}

    // Add customer to the room 
    public addCustomer(customer : Customer):void {
        this.customerRoom.push(customer);
    }

    // Get number of bed in the room 
    public checkBedInTheRoom():boolean{
        return this.numberOfBed > this.customerRoom.length;
    }
}
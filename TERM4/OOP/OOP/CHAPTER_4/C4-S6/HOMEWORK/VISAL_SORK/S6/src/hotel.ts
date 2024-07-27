import { Address } from './address';
import { Room } from './room';
import { Customer } from './customer';

export class Hotel {
    public rooms : Room[] = [];
    constructor(public name : string, public address : Address){}

    // Add rooms to hotel 
    public addRoom(...rooms : Room[]):void{
        rooms.forEach(room => {
            this.rooms.push(room);
        })
    }

    // Check customer whether is in hotel
    public customerIsInHotel(customer:Customer):boolean{
        let isEqual : boolean = false;
        this.rooms.forEach(room=>{
            room.customerRoom.some(cus=>{
                if(cus == customer){
                    isEqual=true;
                }
            })
        })
        return isEqual;
    }

    // Register customer 
    public registerCustomer(customer : Customer , room : Room):boolean{
        if(!this.customerIsInHotel(customer) && room.checkBedInTheRoom()){
            room.addCustomer(customer);
            return true;
        }
        else{
            return false;
        }
    }
}
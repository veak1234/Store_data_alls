import { Address } from "./address";

export class Customer{
    firstName:string;
    lastName:string;
    address?:Address;

    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    addAddress(address:Address){
        this.address = address;
    }
}

import { Address } from './address';

export class Customer {
    constructor(private readonly fisrtName : string, private readonly lastName : string, private address :Address){}

    // Set customer address 
    set setCustomerAddress(address : Address){
        this.address = address;
    }

    // Get firstName 
    get getFirstName(){
        return this.fisrtName;
    }

    // Get firstName 
    get getLastName(){
        return this.lastName;
    }

    // Get address 
    get getAddress(){
        return this.address;
    }

    // check customer is equal to customer 
    public isEqual(customer : Customer):boolean{
        return this.address.city == customer.address.city && this.address.country == customer.address.country && this.address.street == customer.address.street;
    }
}
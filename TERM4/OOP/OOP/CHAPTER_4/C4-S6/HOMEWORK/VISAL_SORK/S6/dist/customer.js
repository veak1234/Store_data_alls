"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(fisrtName, lastName, address) {
        this.fisrtName = fisrtName;
        this.lastName = lastName;
        this.address = address;
    }
    // Set customer address 
    set setCustomerAddress(address) {
        this.address = address;
    }
    // Get firstName 
    get getFirstName() {
        return this.fisrtName;
    }
    // Get firstName 
    get getLastName() {
        return this.lastName;
    }
    // Get address 
    get getAddress() {
        return this.address;
    }
    // check customer is equal to customer 
    isEqual(customer) {
        let isEqual = false;
        if (this.address.city == customer.address.city && this.address.country == customer.address.country && this.address.street == customer.address.street) {
            isEqual = true;
        }
        return isEqual;
    }
}
exports.Customer = Customer;

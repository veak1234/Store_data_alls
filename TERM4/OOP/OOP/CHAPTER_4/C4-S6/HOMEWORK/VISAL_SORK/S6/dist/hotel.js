"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
class Hotel {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.rooms = [];
    }
    // Add rooms to hotel 
    addRoom(...rooms) {
        rooms.forEach(room => {
            this.rooms.push(room);
        });
    }
    // Check customer whether is in hotel
    customerIsInHotel(customer) {
        let isEqual = false;
        this.rooms.forEach(room => {
            room.customerRoom.forEach(cus => {
                if (cus.getFirstName == customer.getFirstName && cus.getLastName == customer.getLastName && cus.isEqual(customer)) {
                    isEqual = true;
                }
            });
        });
        return isEqual;
    }
    // Register customer 
    registerCustomer(customer, room) {
        // console.log(this.customerIsInHotel(customer));
        // console.log(room.checkBedInTheRoom());
        if (!this.customerIsInHotel(customer) && room.checkBedInTheRoom()) {
            room.addCustomer(customer);
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Hotel = Hotel;

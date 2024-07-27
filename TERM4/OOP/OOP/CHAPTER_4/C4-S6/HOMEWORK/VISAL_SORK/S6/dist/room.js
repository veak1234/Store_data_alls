"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
class Room {
    constructor(roomId, numberOfBed) {
        this.roomId = roomId;
        this.numberOfBed = numberOfBed;
        this.customerRoom = [];
    }
    // Add customer to the room 
    addCustomer(customer) {
        this.customerRoom.push(customer);
    }
    // Get number of bed in the room 
    checkBedInTheRoom() {
        if (this.numberOfBed > this.customerRoom.length) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Room = Room;

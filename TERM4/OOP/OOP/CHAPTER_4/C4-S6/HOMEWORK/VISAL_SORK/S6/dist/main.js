"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("./customer");
const address_1 = require("./address");
const room_1 = require("./room");
const hotel_1 = require("./hotel");
// Create Address object 
let address1 = new address_1.Address("BTB", "168", "Cambodia");
let address2 = new address_1.Address("PP", "271", "Cambodia");
// Create Customer objects 
let customer1 = new customer_1.Customer("Sal", "Sart", address1);
let customer2 = new customer_1.Customer("Visal", "Smart", address2);
let customer3 = new customer_1.Customer("Sal", "Boy Loy", address2);
let customer4 = new customer_1.Customer("Sal", "Good", address1);
// Create Hotel object 
let newHotel = new hotel_1.Hotel("Sal Hotel", address1);
// Create Room objects 
let room1 = new room_1.Room("A1", 2);
let room2 = new room_1.Room("A2", 3);
let room3 = new room_1.Room("A3", 4);
newHotel.addRoom(room1, room2, room3);
newHotel.registerCustomer(customer1, room1);
newHotel.registerCustomer(customer2, room1);
newHotel.registerCustomer(customer3, room2);
console.log(room1);
console.log(room2);
// console.log(newHotel);

import { Customer } from './customer';
import { Address } from './address';
import { Room } from './room';
import { Hotel } from './hotel';

// Create Address object 
let address1 : Address = new Address("BTB", "168", "Cambodia");
let address2 : Address = new Address("PP", "271", "Cambodia");

// Create Customer objects 
let customer1 : Customer = new Customer("Sal" , "Sart", address1);
let customer2 : Customer = new Customer("Visal" , "Smart", address2);
let customer3 : Customer = new Customer("Sal" , "Boy Loy", address2);
let customer4 : Customer = new Customer("Sal" , "Good", address1);

// Create Hotel object 
let newHotel : Hotel = new Hotel("Sal Hotel", address1);

// Create Room objects 
let room1 : Room = new Room("A1", 2);
let room2 : Room = new Room("A2", 3);
let room3 : Room = new Room("A3", 4);

newHotel.addRoom(room1, room2, room3);

newHotel.registerCustomer(customer1, room1);
newHotel.registerCustomer(customer2, room1);
newHotel.registerCustomer(customer3, room2);

console.log(newHotel.customerIsInHotel(new Customer("Sal" , "Sart", address1)));


// console.log(room1);
// console.log(room2);
// console.log(newHotel);



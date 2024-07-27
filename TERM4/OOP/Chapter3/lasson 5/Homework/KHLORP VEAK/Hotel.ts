import { Address } from "./Address";
import { Customer } from "./Customer";
import { Room } from "./Room";

class Hotel extends Address {
    private hotelName: string;
    private customers: Customer[] = [];
    private rooms: Room[] = [];

    constructor(name: string, address: string) {
        super(address);
        this.hotelName = name;
    }

    getName(): string {
        return this.hotelName;
    }

    addCustomer(customer: Customer) {
        this.customers.push(customer);
    }

    getCustomers(): Customer[] {
        return this.customers;
    }

    customerIsInHotel(customer: Customer): boolean {
        return this.customers.includes(customer);
    }

    registerCustomer(customer: Customer, room: Room): boolean {
        if (!this.customerIsInHotel(customer)) {
            this.addCustomer(customer);
        }
        // Check if the room is available
        if (!room.isOccupied()) {
            room.setOccupant(customer);
            return true;
        }
        return false; // Room is occupied
    }
}

// usage
let hotel = new Hotel("PNC", "Phnom Pheng");
let customer = new Customer("Veak", "Khlorp");
let room = new Room(101); // Assuming Room class is implemented
hotel.registerCustomer(customer, room);

console.log(hotel);

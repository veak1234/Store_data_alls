class DateTime{
    date: string;
    time: string;
    Trips: Trips[] = [];  // the array when we push
    constructor(date: string, time: string){
        this.date = date;
        this.time = time;
    };
    setDate(): string | number{  // input the Bonus
        return " We go no " + this.date + "th" +" at time " + this.time + " March " ;
    };
    setTrips(Trips: Trips){
        this.Trips.push(Trips);
    };
};

class Trips{
    busName: string;
    DeparturePlace: string;
    ArrivalPlace: string;
    Customers: string;
    Customer: Customer[] = [];  // the array when we push
    constructor (busName: string, DeparturePlace: string, ArrivalPlace: string, Customers: string){
        this.busName = busName;
        this.DeparturePlace = DeparturePlace;
        this.ArrivalPlace = ArrivalPlace;
        this.Customers = Customers;
    }; 
    setCuntomer(Customer: Customer){
        this.Customer.push(Customer);  // Push the array
    };
};

class Customer{
    firstName: string;
    lastName: string;
    Address: Address[] = [];  // the array when we push
    constructor (firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    };
    setAddress(Address: Address){
        this.Address.push(Address);  // Push the array
    };
};

class Address{
    city: string;
    street: string;
    constructor (city: string, street: string){
        this.city = city;
        this.street = street;
    };
};

// crate boject
let Trip1 = new Trips("KAKA Bus", "Phnom Penh, Cambodia", "Kampot, Cambodia", "Him, Sovanda");  // Right ble of class Trip
let Trip2 = new Trips("LYHOR Express", "Phnom Penh, Cambodia", "Sieam Reap, Cambodia", "Him, Sovanda Ronan");  // Right ble of class Trip
let Customer1 = new Customer("Ronan", "ogor");  // Ringht ble of customer
let Customer2 = new Customer("Him", "Hey");             
let Customer3 = new Customer("Sovanda", "Chib");        
let Address1 = new Address("Paris","France");  // Ringht ble of Address
let Address2 = new Address("No", "address");
let Address3 = new Address("Phnom Penh", "Cambodia");
let UpdateTime = new DateTime("15", "6:30");   // Ringht ble of dateTime

Customer1.setAddress(Address1);  // set of address to customer
Customer2.setAddress(Address2);
Customer3.setAddress(Address3);

Trip1.setCuntomer(Customer1);  // set of cuntomer to trip
Trip1.setCuntomer(Customer2);
Trip1.setCuntomer(Customer3);

Trip2.setCuntomer(Customer1);
Trip2.setCuntomer(Customer2);
Trip2.setCuntomer(Customer3);

console.log(JSON.stringify(Trip1), UpdateTime.setDate());  // JSON.stringify(), for show data in array all.
console.log(JSON.stringify(Trip2), UpdateTime.setDate());
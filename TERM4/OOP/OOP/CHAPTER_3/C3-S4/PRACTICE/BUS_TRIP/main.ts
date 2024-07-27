import { Trip } from "./trip";
import { Address } from "./address";
import { Customer } from "./customer";
import { Date } from "./date";


// Create Addresses object
let paris= new Address("Paris", "France");
let pp= new Address("Phnom Penh", "Cambodia");
let kompot= new Address("Kompot", "Cambodia");
let sr= new Address("Siem Reap", "Cambodia");

// Create Customer object
let ronan = new Customer("Ronan", "Ogor");
ronan.addAddress(paris);
let him = new Customer("Him", "Hay");
let sovanda = new Customer("Sovanda", "Chib");
sovanda.addAddress(pp);

// Create Trips object
let kompotTrip = new Trip("KAKA Bus", [him, sovanda], pp, kompot, new Date("15 April 2023","9:00 AM"), new Date("20 April 2023","9:00 AM"));
let srTrip = new Trip("LYHOUR Bus", [him, sovanda, ronan], pp, sr, new Date("1 Dec 2023","6:00 AM"), new Date("2 Dec 2023","9:00 AM"));

console.log("Kompot trip :",kompotTrip);
console.log("Siem Reap trip :",srTrip);
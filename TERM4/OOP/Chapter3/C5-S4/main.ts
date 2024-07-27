
import { batMoble } from "./src/BatMoble";
import { Vehicle } from "./src/Vehicle";
import { TucTuc } from "./src/TucTuc";
import { Minivan } from "./src/Minivan";

let bat = new batMoble('1',3);

let tuc = new TucTuc('2',4);

let minivan = new Minivan('5',5);
let veh = new Vehicle('3',6);

// console.log(bat.getspeed());
import { BatMobile } from "./BatMobile";
import { MiniVan } from "./MiniVan";
import { TucTuc } from "./TucTuc";
import { VehicleConvoy } from "./VehicleConvoy";

// Create BatMobile Object 
let batMobile1 : BatMobile = new BatMobile("1B", 100, true);
let batMobile2 : BatMobile = new BatMobile("2B", 200, false);

// Create MiniVan Objects 
let miniVan1 : MiniVan = new MiniVan("1M", 300, 2, 1);
let miniVan2 : MiniVan = new MiniVan("2M", 300, 1, 2);

// Create TucTuc Objects 
let tucTuc1 : TucTuc = new TucTuc("1T", 200, 1);
let tucTuc2 : TucTuc = new TucTuc("2T", 200, 2);

// Vehicle convey 
let newVehicleConvey : VehicleConvoy = new VehicleConvoy();
newVehicleConvey.addVehicle(batMobile1);
newVehicleConvey.addVehicle(miniVan1);
newVehicleConvey.addVehicle(tucTuc1);

console.log("BatMobile  has :  " +  batMobile1.getSpeed + " speed");
console.log("MiniVan1   has :  " +  miniVan1.getSpeed +  " speed");
console.log("TucTuc1    has :  " +  tucTuc1.getSpeed +  " speed");
console.log("The max speed of convoy is : " + newVehicleConvey.getMaxSpeed +     " speed");







import { BatMobile } from "./BatMobile"
import { Minivan } from "./Minivan"
import { TucTuc } from "./TucTuc"
import { VehicleConvey } from "./VehicleConvey"

let bat = new BatMobile('1002', 45, true)
let min = new Minivan('2002', 45, 2, 1)
let tic = new TucTuc('101', 2000, 5)

let allVehicle = new VehicleConvey()
allVehicle.addVehicule(bat)
allVehicle.addVehicule(min)
allVehicle.addVehicule(tic)

const log = (item: any) => {
    console.log(item)
}

log(bat.getSpeed());
log(min.getSpeed())
log(tic.getSpeed())
log(allVehicle.getMaxSpeed());

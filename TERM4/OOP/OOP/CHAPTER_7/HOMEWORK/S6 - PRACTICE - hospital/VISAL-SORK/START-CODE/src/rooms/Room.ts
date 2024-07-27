import { Patient } from "../human/patient/Patient";
import { Bed } from "./Bed";

/**
 * A room is composed of many beds
 */
export class Room {
  private beds: Bed[] = [];

  constructor(private id: number) {}

  getNumberOfBeds() {
    return this.beds.length;
  }

  getBeds() {
    return this.beds;
  }

  addBed(bed: Bed) {
    return this.beds.push(bed);
  }

  hasFreeBed():boolean{
    for(let bed of this.getBeds()){
      if(!bed.hasPatient()){
        return true;
      }
    }
    return false;
  }

  removeThisPatient(patient:Patient):boolean{
    for(let bed of this.getBeds()){
      if(bed.getPatient() === patient){
        bed.removePatientFromBed();
        return true;
      }
    }
    return false;
  }
}

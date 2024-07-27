import { Disease } from "../../medical/Disease";
import { Gender, Person } from "../Person";
import { Staff, StaffCategory } from "./Staff";

/**
 * A doctor is a staff with a mediacal speciality
 */
export class Doctor extends Staff {
  private speciality: Disease;

  constructor(category: StaffCategory, name: string, age: number, gender: Gender) {
    super(category,name, age, gender);
  }

  hasSpeciality(): boolean {
    return this.speciality !== undefined;
  }

  setSpeciality(speciality: Disease) {
    if(!this.hasSpeciality()){
      this.speciality = speciality;
    }
  }

  getSpeciality() {
    return this.speciality;
  }
}

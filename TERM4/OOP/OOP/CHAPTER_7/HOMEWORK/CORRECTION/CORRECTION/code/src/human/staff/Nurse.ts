import { Gender, Person } from "../Person";
import { Staff, StaffCategory } from "./Staff";

/**
 * A nurse manage patient checks
 */
export class Nurse extends Staff {
  constructor(name: string, age: number, gender: Gender) {
    super(StaffCategory.NURSE, name, age, gender);
  }
}

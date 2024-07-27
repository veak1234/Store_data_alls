import { Gender, Person } from "../Person";
import { Staff, StaffCategory } from "./Staff";

/**
 * A nurse manage patient checks
 */
export class Nurse extends Staff {
  constructor(category: StaffCategory,name: string, age: number, gender: Gender) {
    super(category,name, age, gender);
  }
}

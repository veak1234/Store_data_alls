import { Disease } from "../medical/Disease";
import { Patient } from "./patient/Patient";
import { Doctor } from "./staff/Doctor";
import { Staff, StaffCategory } from "./staff/Staff";

export class HumanManager {
  private patients: Patient[] = [];
  private staffs: Staff[] = [];

  addPatient(patient: Patient) {
    this.patients.push(patient);
  }

  getPatients() {
    return this.patients;
  }

  addStaff(staff: Staff) {
    this.staffs.push(staff);
  }

  getStaffs() {
    return this.staffs;
  }

  /**
   *
   * @returns the first doctor found among the staff, having the given disease as speciality
   */
  getADoctorWithSkill(disease: Disease): Doctor | undefined {
    let doctor : Doctor | undefined = undefined;
    this.staffs.forEach(staff=>{
      if(staff instanceof Doctor){
        if(staff.getSpeciality() === disease){
          doctor = staff;
        }
      }
    })
    return doctor; //TODO
  }
}

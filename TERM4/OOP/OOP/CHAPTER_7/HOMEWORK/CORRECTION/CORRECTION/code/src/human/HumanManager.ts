import { Disease } from "../medical/Disease";
import { Patient } from "./patient/Patient";
import { Doctor } from "./staff/Doctor";
import { Staff, StaffCategory } from "./staff/Staff";

export class HumanManager {
  private patients: Patient[] = [];
  private staffs: Staff[] = [];

  adddPatient(patient: Patient) {
    this.patients.push(patient);
  }

  getdPatients() {
    return this.patients;
  }

  addStaff(staff: Staff) {
    this.staffs.push(staff);
  }

  getStaffs() {
    return this.staffs;
  }

  /**
   * @returns get only the doctors from the list of staff
   */
  getDoctors(): Doctor[] {
    let result: Doctor[] = [];
    for (let staff of this.staffs) {
      if (staff.getCategory() == StaffCategory.DOCTOR) {
        let doctor = staff as Doctor;
        result.push(doctor);
      }
    }
    return result;
  }

  getADoctorWithSkill(disease: Disease): Doctor | undefined {
    for (let doctor of this.getDoctors()) {
      if (doctor.getSpeciality() === disease) {
        return doctor;
      }
    }
    return undefined;
  }
}

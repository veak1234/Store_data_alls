import { Patient } from "../human/patient/Patient";
import { BedStatus } from "./BedStatus";

export class Bed {
  private status = BedStatus.GOOD; // by default
  private patient?: Patient = undefined; // not patient in bed

  constructor(private id: number) {}

  // BED PATIENT ----------------------------------------------
  setPatient(patient: Patient) {
    this.patient = patient;
  }

  hasPatient() {
    return this.patient !== undefined;
  }

  getPatient() {
    return this.patient;
  }

  // BED STATUS  ----------------------------------------------
  getStatus() {
    return this.status;
  }

  setStatus(newStatus: BedStatus) {
    this.status = newStatus;
  }
}

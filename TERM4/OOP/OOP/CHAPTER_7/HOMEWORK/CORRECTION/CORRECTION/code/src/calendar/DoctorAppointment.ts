import { Doctor } from "../human/staff/Doctor";
import { Patient } from "../human/patient/Patient";
import { Event, EventCategory } from "./Event";

export class DoctorAppointment extends Event {
  constructor(
    category: EventCategory,
    start: Date,
    end: Date,
    private doctor: Doctor,
    private patient: Patient
  ) {
    super(category, start, end);
  }

  getDoctor() {
    return this.doctor;
  }

  getStart() {
    return this.start;
  }

  getEnd() {
    return this.end;
  }
}

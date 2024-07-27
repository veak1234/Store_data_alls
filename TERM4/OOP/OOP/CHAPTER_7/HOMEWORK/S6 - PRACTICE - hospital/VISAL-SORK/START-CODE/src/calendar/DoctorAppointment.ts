import { Doctor } from "../human/staff/Doctor";
import { Patient } from "../human/patient/Patient";
import { DateTime } from "./DateTime";
import { Event, EventCategory } from "./Event";

export class DoctorAppointment extends Event {
  constructor(
    category: EventCategory,
    start: DateTime,
    end: DateTime,
    private doctor: Doctor,
    private patient: Patient
  ) {
    super(category, start, end);
  }
  // Get Doctor 
  get getDoctor():Doctor{
    return this.doctor;
  }

  // Get Start Datetime 
  get getStartDateTime():DateTime{
    return this.start;
  }

  // Get End Datetime 
  get getEndDateTime():DateTime{
    return this.end;
  }
}

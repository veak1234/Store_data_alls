import { Doctor } from "../human/staff/Doctor";
import { DoctorAppointment } from "./DoctorAppointment";
import { Event, EventCategory } from "./Event";

export class CalendarManager {
  public events: Event[] = [];

  addEvent(event: Event) {
    this.events.push(event);
  }

  /**
   * @returns get only the doctors  appointements from the list of events
   */
  getDoctorAppointment(): DoctorAppointment[] {
    let result: DoctorAppointment[] = [];
    for (let event of this.events) {
      if (event.getCategogy() == EventCategory.DOCTOR_APPOINTEMENT) {
        let appointement = event as DoctorAppointment;
        result.push(appointement);
      }
    }
    return result;
  }

  /**
   * @returns all appointement for the given doctor
   */
  getAllAppointementFor(doctor: Doctor): DoctorAppointment[] {
    let result: DoctorAppointment[] = [];
    for (let appointement of this.getDoctorAppointment()) {
      if (appointement.getDoctor() == doctor) {
        result.push(appointement);
      }
    }
    return result;
  }

  /**
   * @param doctor the doctor
   * @param date  the date
   * @returns true if the doctor is free at given date (no appointement) - false otherwise
   */
  isDoctorFree(doctor: Doctor, date: Date): boolean {
    let allDoctorEvents = this.getAllAppointementFor(doctor);
    for (let event of allDoctorEvents) {
      if (event.contains(date)) {
        return false;
      }
    }
    return false; //TODO
  }
}

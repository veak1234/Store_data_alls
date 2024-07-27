import { Doctor } from "../human/staff/Doctor";
import { DateTime } from "./DateTime";
import { DoctorAppointment } from "./DoctorAppointment";
import { Event } from "./Event";

export class CalendarManager {
  public events: Event[] = [];

  addEvent(event: Event) {
    this.events.push(event);
  }

  /**
   * @returns all appointement for the given doctor
   */
  getAllAppointementFor(doctor: Doctor): DoctorAppointment[] {
    let doctorEvents : DoctorAppointment[] = [];
    this.events.forEach(event=>{
      if(event instanceof DoctorAppointment){
        if(event.getDoctor === doctor){
          doctorEvents.push(event)
        }
      }
    })
    return doctorEvents;
  }

  /**
   *
   * @returns true if the doctor is free at given date (no appointement) - false otherwise
   */
  isDoctorFree(date: DateTime): boolean {
    let isFree : boolean = true;
    this.events.forEach(event=>{
      if(event instanceof DoctorAppointment){
        if(event.getStartDateTime.isEqual(date) || event.getEndDateTime.isEqual(date)){
          isFree = false;
        }
      }
    })
    return isFree; //TODO
  }
}


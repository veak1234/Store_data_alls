// TEST THE MODEL HERE
import { Hospital } from './Hospital';
import { Person, Gender } from './human/Person';
import { HumanManager } from './human/HumanManager';
import { Doctor } from './human/staff/Doctor';
import { Nurse } from './human/staff/Nurse';
import { Staff, StaffCategory } from './human/staff/Staff';
import { Room } from './rooms/Room';
import { Bed } from './rooms/Bed';
import { Patient } from './human/patient/Patient';
import { Event, EventCategory } from './calendar/Event';
import { DoctorAppointment } from './calendar/DoctorAppointment';
import { DateTime } from './calendar/DateTime';
import { CalendarManager } from './calendar/CalendarManager';
import { Disease } from './medical/Disease';

// Create new Hopital ----------------------------
let newHospital: Hospital = new Hospital( "BTB","Angkor Wat");

// Create 2 new Rooms ----------------------------
let room1 : Room = new Room(1);
let room2 : Room = new Room(2);

// Create beds -----------------------------------
let bed1 : Bed = new Bed(1);
let bed2 : Bed = new Bed(2);
let bed3 : Bed = new Bed(3);
let bed4 : Bed = new Bed(4);

// Add 2 beds to each room -----------------------
room1.addBed(bed1);
room1.addBed(bed2);
room2.addBed(bed3);
room2.addBed(bed4);

// Add rooms to the hospital ---------------------
newHospital.rooms.addRoom(room1);
newHospital.rooms.addRoom(room2);

// Create 2 patients -----------------------------
let rady : Patient = new Patient("RADY", 19, Gender.MALE);
let jeanne : Patient = new Patient("JEANNE", 20, Gender.FEMALE);

// Assign patient to each room -------------------
bed1.setPatient(rady);
bed3.setPatient(jeanne);

// Create 2 doctors 
let him : Doctor = new Doctor(StaffCategory.DOCTOR, "HIM", 20, Gender.MALE);
let ronan : Nurse = new Nurse(StaffCategory.NURSE, "RONAN", 18, Gender.FEMALE);

// Add Doctor and Nurse to the hospital ---------
newHospital.hr.addStaff(him);
newHospital.hr.addStaff(ronan);

// Set Doctor's speciality ----------------------
him.setSpeciality(Disease.CANCER);

// Create a doctor appointment ------------------
let doctorAppointment1 : DoctorAppointment = new DoctorAppointment( EventCategory.DOCTOR_APPOINTEMENT, 
                                                                    new DateTime(14, 4, 2023, 8), new DateTime(14, 4, 2023, 10), 
                                                                    him, jeanne);

// Add event to the hospital --------------------
newHospital.calendar.addEvent(doctorAppointment1);


// TEST --------------------------------
// console.log(newHopital.hr.getADoctorWithSkill(Disease.CANCER));
// console.log(newHospital.calendar.isDoctorFree(new DateTime(1, 1, 2023, 1)));
console.log(newHospital.rooms.findFreeRoom())














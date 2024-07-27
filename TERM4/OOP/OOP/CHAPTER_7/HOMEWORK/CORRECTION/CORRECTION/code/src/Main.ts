// TEST THE MODEL HERE

import { Hospital } from "./Hospital";
import { Patient } from "./human/patient/Patient";
import { Bed } from "./rooms/Bed";
import { Room } from "./rooms/Room";
import { Gender } from "./human/Person";
import { Doctor } from "./human/staff/Doctor";
import { Nurse } from "./human/staff/Nurse";
import { DoctorAppointment } from "./calendar/DoctorAppointment";
import { EventCategory } from "./calendar/Event";

let hospital = new Hospital("narongHopital", "1 street Montain");
let bed1 = new Bed(1);
let bed2 = new Bed(2);
let theOnlyRoom = new Room(3); // this hospital has only room, we are poor.

theOnlyRoom.addBed(bed1);
theOnlyRoom.addBed(bed2);

let rady = new Patient("Rady", 18, Gender.MALE);
let jeane = new Patient("Jeane", 25, Gender.FEMALE);
hospital.hr.adddPatient(rady);
hospital.hr.adddPatient(jeane);

//----------------------------------------------------------
//  Test the room manager
//----------------------------------------------------------
bed1.setPatient(rady);
bed2.setPatient(jeane);

let hospitalFull = hospital.rooms.getFreeRoom() == undefined;
console.log("the hopistal is full : " + hospitalFull);

//----------------------------------------------------------
//  Test the appointement manager
//----------------------------------------------------------
let himDoctor = new Doctor("him", 85, Gender.FEMALE);
let ronanNurse = new Nurse("ronan", 18, Gender.FEMALE);
hospital.hr.addStaff(himDoctor);
hospital.hr.addStaff(ronanNurse);

let start = new Date("December 17, 2022 16:00:00");
let end = new Date("December 17, 2022 17:00:00");
let jeanneAppointmennt = new DoctorAppointment(
  EventCategory.DOCTOR_APPOINTEMENT,
  start,
  end,
  himDoctor,
  jeane
);
hospital.calendar.addEvent(jeanneAppointmennt);

let isDoctorFree = hospital.calendar.isDoctorFree(
  himDoctor,
  new Date("December 17, 2022 16:30:00")
);
console.log("HIm doctuer is free : ", isDoctorFree); // should be false

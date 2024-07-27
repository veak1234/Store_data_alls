"use strict";
exports.__esModule = true;
// TEST THE MODEL HERE
var Hospital_1 = require("./Hospital");
var Person_1 = require("./human/Person");
var Doctor_1 = require("./human/staff/Doctor");
var Nurse_1 = require("./human/staff/Nurse");
var Staff_1 = require("./human/staff/Staff");
var Room_1 = require("./rooms/Room");
var Bed_1 = require("./rooms/Bed");
var Patient_1 = require("./human/patient/Patient");
var Event_1 = require("./calendar/Event");
var DoctorAppointment_1 = require("./calendar/DoctorAppointment");
var DateTime_1 = require("./calendar/DateTime");
var Disease_1 = require("./medical/Disease");
// Create new Hopital ----------------------------
var newHospital = new Hospital_1.Hospital("BTB", "Angkor Wat");
// Create 2 new Rooms ----------------------------
var room1 = new Room_1.Room(1);
var room2 = new Room_1.Room(2);
// Create beds -----------------------------------
var bed1 = new Bed_1.Bed(1);
var bed2 = new Bed_1.Bed(2);
var bed3 = new Bed_1.Bed(3);
var bed4 = new Bed_1.Bed(4);
// Add 2 beds to each room -----------------------
room1.addBed(bed1);
room1.addBed(bed2);
room2.addBed(bed3);
room2.addBed(bed4);
// Add rooms to the hospital ---------------------
newHospital.rooms.addRoom(room1);
newHospital.rooms.addRoom(room2);
// Create 2 patients -----------------------------
var rady = new Patient_1.Patient("RADY", 19, Person_1.Gender.MALE);
var jeanne = new Patient_1.Patient("JEANNE", 20, Person_1.Gender.FEMALE);
// Assign patient to each room -------------------
bed1.setPatient(rady);
bed3.setPatient(jeanne);
// Create 2 doctors 
var him = new Doctor_1.Doctor(Staff_1.StaffCategory.DOCTOR, "HIM", 20, Person_1.Gender.MALE);
var ronan = new Nurse_1.Nurse(Staff_1.StaffCategory.NURSE, "RONAN", 18, Person_1.Gender.FEMALE);
// Add Doctor and Nurse to the hospital ---------
newHospital.hr.addStaff(him);
newHospital.hr.addStaff(ronan);
// Set Doctor's speciality ----------------------
him.setSpeciality(Disease_1.Disease.CANCER);
him.setSpeciality(Disease_1.Disease.NOSE);
// Create a doctor appointment ------------------
var doctorAppointment1 = new DoctorAppointment_1.DoctorAppointment(Event_1.EventCategory.DOCTOR_APPOINTEMENT, new DateTime_1.DateTime(14, 4, 2023, 8), new DateTime_1.DateTime(14, 4, 2023, 10), him, jeanne);
// Add event to the hospital --------------------
newHospital.calendar.addEvent(doctorAppointment1);
// TEST --------------------------------
// console.log(newHopital.hr.getADoctorWithSkill(Disease.CANCER));
// console.log(newHospital.calendar.isDoctorFree(new DateTime(1, 1, 2023, 1)));
console.log(newHospital.hr.getADoctorWithSkill(Disease_1.Disease.NOSE));

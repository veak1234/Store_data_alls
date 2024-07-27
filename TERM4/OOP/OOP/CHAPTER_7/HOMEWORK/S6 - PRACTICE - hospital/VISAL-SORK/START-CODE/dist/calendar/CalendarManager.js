"use strict";
exports.__esModule = true;
exports.CalendarManager = void 0;
var DoctorAppointment_1 = require("./DoctorAppointment");
var CalendarManager = /** @class */ (function () {
    function CalendarManager() {
        this.events = [];
    }
    CalendarManager.prototype.addEvent = function (event) {
        this.events.push(event);
    };
    /**
     * @returns all appointement for the given doctor
     */
    CalendarManager.prototype.getAllAppointementFor = function (doctor) {
        var doctorEvents = [];
        this.events.forEach(function (event) {
            if (event instanceof DoctorAppointment_1.DoctorAppointment) {
                if (event.getDoctor === doctor) {
                    doctorEvents.push(event);
                }
            }
        });
        return doctorEvents;
    };
    /**
     *
     * @returns true if the doctor is free at given date (no appointement) - false otherwise
     */
    CalendarManager.prototype.isDoctorFree = function (date) {
        var isFree = true;
        this.events.forEach(function (event) {
            if (event instanceof DoctorAppointment_1.DoctorAppointment) {
                if (event.getStartDateTime.isEqual(date) || event.getEndDateTime.isEqual(date)) {
                    isFree = false;
                }
            }
        });
        return isFree; //TODO
    };
    return CalendarManager;
}());
exports.CalendarManager = CalendarManager;

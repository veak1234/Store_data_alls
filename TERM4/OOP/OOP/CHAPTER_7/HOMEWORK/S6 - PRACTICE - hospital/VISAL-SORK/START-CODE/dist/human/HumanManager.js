"use strict";
exports.__esModule = true;
exports.HumanManager = void 0;
var Doctor_1 = require("./staff/Doctor");
var HumanManager = /** @class */ (function () {
    function HumanManager() {
        this.patients = [];
        this.staffs = [];
    }
    HumanManager.prototype.addPatient = function (patient) {
        this.patients.push(patient);
    };
    HumanManager.prototype.getPatients = function () {
        return this.patients;
    };
    HumanManager.prototype.addStaff = function (staff) {
        this.staffs.push(staff);
    };
    HumanManager.prototype.getStaffs = function () {
        return this.staffs;
    };
    /**
     *
     * @returns the first doctor found among the staff, having the given disease as speciality
     */
    HumanManager.prototype.getADoctorWithSkill = function (disease) {
        var doctor = undefined;
        this.staffs.forEach(function (staff) {
            if (staff instanceof Doctor_1.Doctor) {
                if (staff.getSpeciality() === disease) {
                    doctor = staff;
                }
            }
        });
        return doctor; //TODO
    };
    return HumanManager;
}());
exports.HumanManager = HumanManager;

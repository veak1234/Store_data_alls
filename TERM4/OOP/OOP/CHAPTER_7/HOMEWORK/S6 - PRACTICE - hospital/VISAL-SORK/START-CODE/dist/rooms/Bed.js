"use strict";
exports.__esModule = true;
exports.Bed = void 0;
var BedStatus_1 = require("./BedStatus");
var Bed = /** @class */ (function () {
    function Bed(id) {
        this.id = id;
        this.status = BedStatus_1.BedStatus.GOOD; // by default
        this.patient = undefined; // not patient in bed
    }
    // BED PATIENT ----------------------------------------------
    Bed.prototype.setPatient = function (patient) {
        this.patient = patient;
    };
    Bed.prototype.hasPatient = function () {
        return this.patient !== undefined;
    };
    Bed.prototype.getPatient = function () {
        return this.patient;
    };
    // BED STATUS  ----------------------------------------------
    Bed.prototype.getStatus = function () {
        return this.status;
    };
    Bed.prototype.setStatus = function (newStatus) {
        this.status = newStatus;
    };
    // REMOVE PATIENT --------------------------------
    Bed.prototype.removePatientFromBed = function () {
        this.patient = undefined;
    };
    return Bed;
}());
exports.Bed = Bed;

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.DoctorAppointment = void 0;
var Event_1 = require("./Event");
var DoctorAppointment = /** @class */ (function (_super) {
    __extends(DoctorAppointment, _super);
    function DoctorAppointment(category, start, end, doctor, patient) {
        var _this = _super.call(this, category, start, end) || this;
        _this.doctor = doctor;
        _this.patient = patient;
        return _this;
    }
    Object.defineProperty(DoctorAppointment.prototype, "getDoctor", {
        // Get Doctor 
        get: function () {
            return this.doctor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DoctorAppointment.prototype, "getStartDateTime", {
        // Get Start Datetime 
        get: function () {
            return this.start;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DoctorAppointment.prototype, "getEndDateTime", {
        // Get End Datetime 
        get: function () {
            return this.end;
        },
        enumerable: false,
        configurable: true
    });
    return DoctorAppointment;
}(Event_1.Event));
exports.DoctorAppointment = DoctorAppointment;

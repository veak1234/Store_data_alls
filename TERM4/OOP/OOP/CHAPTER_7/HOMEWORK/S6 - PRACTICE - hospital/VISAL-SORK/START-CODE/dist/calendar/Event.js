"use strict";
exports.__esModule = true;
exports.Event = exports.EventCategory = void 0;
var EventCategory;
(function (EventCategory) {
    EventCategory[EventCategory["DOCTOR_APPOINTEMENT"] = 0] = "DOCTOR_APPOINTEMENT";
})(EventCategory = exports.EventCategory || (exports.EventCategory = {}));
var Event = /** @class */ (function () {
    function Event(category, start, end) {
        this.category = category;
        this.start = start;
        this.end = end;
    }
    return Event;
}());
exports.Event = Event;

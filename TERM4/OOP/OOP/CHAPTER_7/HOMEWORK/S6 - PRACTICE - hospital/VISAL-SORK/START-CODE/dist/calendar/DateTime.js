"use strict";
exports.__esModule = true;
exports.DateTime = void 0;
var DateTime = /** @class */ (function () {
    function DateTime(day, month, year, time) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.time = time;
    }
    DateTime.prototype.isEqual = function (other) {
        return (this.day === other.day &&
            this.month === other.month &&
            this.year === other.year &&
            this.time === other.time);
    };
    return DateTime;
}());
exports.DateTime = DateTime;

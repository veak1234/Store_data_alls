"use strict";
exports.__esModule = true;
exports.Room = void 0;
/**
 * A room is composed of many beds
 */
var Room = /** @class */ (function () {
    function Room(id) {
        this.id = id;
        this.beds = [];
    }
    Room.prototype.getNumberOfBeds = function () {
        return this.beds.length;
    };
    Room.prototype.getBeds = function () {
        return this.beds;
    };
    Room.prototype.addBed = function (bed) {
        return this.beds.push(bed);
    };
    return Room;
}());
exports.Room = Room;

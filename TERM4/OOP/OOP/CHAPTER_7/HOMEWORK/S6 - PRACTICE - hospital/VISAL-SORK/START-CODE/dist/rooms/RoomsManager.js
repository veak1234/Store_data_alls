"use strict";
exports.__esModule = true;
exports.RoomsManager = void 0;
var RoomsManager = /** @class */ (function () {
    function RoomsManager() {
        this.rooms = [];
    }
    RoomsManager.prototype.getNumberOfRooms = function () {
        return this.rooms.length;
    };
    RoomsManager.prototype.addRoom = function (room) {
        return this.rooms.push(room);
    };
    /** Find a room with a free bed
     * @return the first room available with a free bed
     */
    RoomsManager.prototype.findFreeRoom = function () {
        var availableRoom = undefined;
        var isAvailable = true;
        this.rooms.forEach(function (room) {
            room.getBeds().forEach(function (bed) {
                if (!bed.hasPatient() && isAvailable) {
                    availableRoom = room;
                    isAvailable = false;
                }
            });
        });
        return availableRoom; // TODO
    };
    // Remove Patient 
    RoomsManager.prototype.removePatient = function (patient) {
        var freeRoom = undefined;
        this.rooms.forEach(function (room) {
            room.getBeds().forEach(function (bed) {
                if (bed.getPatient() === patient) {
                    bed.removePatientFromBed();
                    freeRoom = room;
                }
            });
        });
        return freeRoom;
    };
    return RoomsManager;
}());
exports.RoomsManager = RoomsManager;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.House = void 0;
var House = /** @class */ (function () {
    function House(name) {
        this.doors = [];
        this.rooms = [];
        this.name = name;
    }
    House.prototype.addRoom = function (room) {
        this.rooms.push(room);
    };
    House.prototype.addDoor = function (door) {
        this.doors.push(door);
    };
    return House;
}());
exports.House = House;
//# sourceMappingURL=House.js.map
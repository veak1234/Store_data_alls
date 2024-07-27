"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
var Room = /** @class */ (function () {
    function Room(name) {
        this.doors = [];
        this.name = name;
    }
    Room.prototype.addDoorToRoom = function (door) {
        this.doors.push(door);
    };
    return Room;
}());
exports.Room = Room;
//# sourceMappingURL=Room.js.map
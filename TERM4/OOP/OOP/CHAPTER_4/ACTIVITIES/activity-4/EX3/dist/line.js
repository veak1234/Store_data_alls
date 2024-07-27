"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Line = void 0;
var Line = /** @class */ (function () {
    function Line(point1, point2) {
        this.point1 = point1;
        this.point2 = point2;
    }
    Line.prototype.isEqual = function (line) {
        return (this.point1.x === line.point1.x && this.point1.y === line.point1.y) && (this.point2.x === line.point2.x && this.point2.y === line.point2.y);
    };
    return Line;
}());
exports.Line = Line;

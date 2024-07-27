"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.isEqual = function (point) {
        return this.x === point.x && this.y === point.y;
    };
    return Point;
}());
exports.Point = Point;

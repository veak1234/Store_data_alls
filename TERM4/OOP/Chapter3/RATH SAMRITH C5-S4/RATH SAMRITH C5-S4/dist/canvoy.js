"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvoy = void 0;
var Canvoy = /** @class */ (function () {
    function Canvoy(canvoy) {
        this.canvoy = [];
        this.canvoy = canvoy;
    }
    Canvoy.prototype.getMaxSpeed = function () {
        var max = this.canvoy[0].getSpeed();
        for (var _i = 0, _a = this.canvoy; _i < _a.length; _i++) {
            var vehicle = _a[_i];
            if (vehicle.getSpeed() > max) {
                max = vehicle.getSpeed();
            }
        }
        return max;
    };
    return Canvoy;
}());
exports.Canvoy = Canvoy;

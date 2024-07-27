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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Batmobile = void 0;
var vehicle_1 = require("./vehicle");
var Batmobile = /** @class */ (function (_super) {
    __extends(Batmobile, _super);
    function Batmobile(plateID, weight, speed, isInside) {
        var _this = _super.call(this, plateID, speed) || this;
        _this.speed = speed;
        _this.speed = speed;
        _this.isInside = isInside;
        return _this;
    }
    Batmobile.prototype.getSpeed = function () {
        return this.speed;
    };
    return Batmobile;
}(vehicle_1.Vehicle));
exports.Batmobile = Batmobile;

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
exports.TucTuc = void 0;
var vehicle_1 = require("./vehicle");
var TucTuc = /** @class */ (function (_super) {
    __extends(TucTuc, _super);
    function TucTuc(plateID, weight, passenger) {
        var _this = _super.call(this, plateID, weight) || this;
        _this.speed = 130;
        _this.speed = _this.speed;
        return _this;
    }
    TucTuc.prototype.getSpeed = function () {
        for (var i = 0; i < this.passenger; i++) {
            this.speed -= 5;
        }
        return this.speed;
    };
    return TucTuc;
}(vehicle_1.Vehicle));
exports.TucTuc = TucTuc;

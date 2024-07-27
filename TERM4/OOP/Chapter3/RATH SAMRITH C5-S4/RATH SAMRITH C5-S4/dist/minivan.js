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
exports.MiniVan = void 0;
var vehicle_1 = require("./vehicle");
var MiniVan = /** @class */ (function (_super) {
    __extends(MiniVan, _super);
    function MiniVan(plateID, weight, passenger, laggage) {
        var _this = _super.call(this, plateID, weight) || this;
        _this.speed = 130;
        _this.passenger = passenger;
        _this.laggage = laggage;
        return _this;
    }
    MiniVan.prototype.getSpeed = function () {
        for (var i = 0; i < this.passenger; i++) {
            this.speed -= 10;
        }
        for (var i = 0; i < this.laggage; i++) {
            this.speed -= 5;
        }
        return this.speed;
    };
    return MiniVan;
}(vehicle_1.Vehicle));
exports.MiniVan = MiniVan;

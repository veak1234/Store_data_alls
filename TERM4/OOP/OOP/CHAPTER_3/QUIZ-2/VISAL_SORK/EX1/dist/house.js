"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.House = void 0;
var chair_1 = require("./chair");
var House = /** @class */ (function () {
    function House(name) {
        this.chairs = [];
        this.name = name;
    }
    House.prototype.addChair = function (chairId) {
        var newChair = new chair_1.Chair(this, chairId);
        this.chairs.push(newChair);
        return newChair;
    };
    return House;
}());
exports.House = House;

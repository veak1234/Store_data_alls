"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var line_1 = require("./line");
// Create 4 point objects
var point1 = new point_1.Point(1, 2);
var point2 = new point_1.Point(1, 2);
var point3 = new point_1.Point(10, 20);
var point4 = new point_1.Point(12, 23);
// Create 2 Line objects 
var line1 = new line_1.Line(point1, point2);
var line2 = new line_1.Line(point1, point3);
console.log(point1.isEqual(point2));
console.log(line1.isEqual(line2));

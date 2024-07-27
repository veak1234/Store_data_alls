import { Point } from './point';
import { Line } from './line';

// Create 4 point objects
let point1 : Point = new Point(1,2)
let point2 : Point = new Point(1,2)
let point3 : Point = new Point(10,20)
let point4 : Point = new Point(12,23)

// Create 2 Line objects 
let line1 : Line = new Line(point1, point2);
let line2 : Line = new Line(point1, point3);

console.log(point1.isEqual(point2));
console.log(line1.isEqual(line2));

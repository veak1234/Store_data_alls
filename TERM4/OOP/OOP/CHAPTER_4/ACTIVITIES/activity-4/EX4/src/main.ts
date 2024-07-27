import { Point } from './point';
import { Line } from './line';
import { Graphic2D } from './graphic2D';

// Create 4 point objects 
let point1 : Point = new Point(1,2);
let point2 : Point = new Point(1,2);
let point3 : Point = new Point(10,20);
let point4 : Point = new Point(5,5);

// Create 2 line objects 
let line1 : Line = new Line(point1, point2, "black");
let line2 : Line = new Line(point4, point3, "red");

// Create Graphic2D object 
let newGraphic = new Graphic2D();
newGraphic.addLine(line1);

// console.log(point1.isEqual(point2));
// console.log(line1.isEqual(line2));
console.log(newGraphic.contain(line1));


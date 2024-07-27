import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";

let circle1: Circle = new Circle(2, 3, 4);
let rectangle1: Rectangle = new Rectangle(2, 4, 3, 6);
let square1: Square = new Square(2, 2, 2);

// Get shape of Circle
console.log("Circle width:      " + circle1.getWidth());
console.log("Circle height:     " + circle1.getHeight());
console.log("Circle area:       " + circle1.getArea()+ "\n");

// Get shape of Retangle
console.log("Rectangle width:   " + rectangle1.getWidth());
console.log("Rectangle height:  " + rectangle1.getHeight());
console.log("Rectangle area:    " + rectangle1.getArea()+ "\n");

// Get shape of Square
console.log("Square width:      " + square1.getWidth());
console.log("Square height:     " + square1.getHeight());
console.log("Square area:       " + square1.getArea());

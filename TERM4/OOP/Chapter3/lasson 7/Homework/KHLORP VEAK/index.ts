import {Shape} from './src/Shape';
import {Circle} from './src/Circle';
import {Rectangle} from './src/Rextangle';
import {Square} from './src/Spuare';

let circleRadius = new Circle(2, 2, 4);
// console.log(circleRadius.toJSON());

let shape = new Shape(1, 32);
// console.log("Shape Area: ", shape.getArea());

let rectangle = new Rectangle(6, 4, 7, 2);
// console.log("Rectangle Area: ", rectangle.getArea());

let square = new Square(12, 5, 2);
// console.log("Square Height: ", square.getHeight());
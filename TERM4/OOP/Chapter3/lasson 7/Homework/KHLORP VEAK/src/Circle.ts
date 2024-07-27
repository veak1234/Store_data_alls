
import { Shape } from "./Shape";

export class Circle extends Shape {
    private radius: number;

    constructor(leftX: number, bottomY: number, radius: number) {
        super(leftX, bottomY);
        this.radius = radius;
    }

    getWidth(): number {
        return this.radius * 2;
    }

    getHeight(): number {
        return this.radius * 2;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

let circleRadius = new Circle(2, 2, 4);  // Circle { leftX: 2, bottomY: 2, radius: 4 }
circleRadius.getArea();  // resould = 50.26548245743669
circleRadius.getHeight();  // resould = 8
circleRadius.getWidth();   // resould = 8

console.log(circleRadius);
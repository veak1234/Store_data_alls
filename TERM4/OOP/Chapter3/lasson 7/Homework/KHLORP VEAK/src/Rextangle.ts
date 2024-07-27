
import { Shape } from "./Shape";

export class Rectangle extends Shape {
    private rightX: number;
    private topY: number;

    constructor(leftX: number, bottomY: number, rightX: number, topY: number) {
        super(leftX, bottomY);
        this.rightX = rightX;
        this.topY = topY;
    }

    getWidth(): number {
        return this.rightX - this.leftX;
    }

    getHeight(): number {
        return this.topY - this.bottomY;
    }

    getArea(): number {
        return this.getWidth() * this.getHeight();
    }
}

let rectang = new Rectangle(6,4,7,2); // resould Rectangle is = { leftX: 6, bottomY: 4, right: 7, topY: 2 }
rectang.getWidth(); // resould = 1
rectang.getHeight(); // resould = -2
rectang.getArea();  // resould = -2

console.log("Rectangle Area: ", rectang.getArea());
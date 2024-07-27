import { Shape } from "./Shape";

export class Square extends Shape {
    private size: number;

    constructor(leftX: number, bottomY: number, size: number) {
        super(leftX, bottomY);
        this.size = size;
    }

    getWidth(): number {
        return this.size;
    }

    getHeight(): number {
        return this.size;
    }

    getArea(): number {
        return this.size * this.size;
    }
}

let square= new Square(12, 5, 2);  // resould it is 
square.getArea(); // resould have square = 4
square.getWidth(); // resould have square = 2
square.getHeight(); // resould have square = 2

console.log("Square Area:", square.getArea());
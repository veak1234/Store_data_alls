
export class Shape {
    constructor(protected leftX: number, protected bottomY: number) {}

    getWidth(): number {
        return this.leftX - this.leftX;
    }

    getHeight(): number {
        return this.bottomY - this.bottomY;
    }

    getArea(): number {
        return this.getHeight() * this.getWidth();
    }

    toJSON(): any {
        return {
            leftX: this.leftX,
            bottomY: this.bottomY
        };
    }
}

let shape = new Shape(1,32);// resould have shape { leftX: 1, bottomY: 32 }
shape.getArea(); // resould have = 0
shape.getHeight(); // resould have = 0
shape.getWidth(); // resould have = 0

console.log("Shape Area: ", shape.getArea());


class Shape{
    constructor(protected leftX: number, protected bottomY:number){}

    getWidth():number{
        return this.leftX - this.leftX; // getwithin = 0
    }
    getHeight():number{
        return this.bottomY - this.bottomY; // getHeight = 0
    }
    getArea():number{
        return this.getWidth() * this.getHeight(); // getHeight * getWidth = 0
    }

}

class Square extends Shape{
    private size:number;
    constructor(leftX:number, bottomY:number, size:number){
        super(leftX, bottomY);
        this.size = size; // input size
    }
    getWidth():number{
        return this.size; // retuse size = 2
    }
    getHeight():number{
        return this.size; // retuse size = 2
    }
    getArea():number{
        return this.size * this.size; // size * size = 4
    }
}

class Rectangle extends Shape{
    private right:number;
    private topY:number;

    constructor(leftX:number, bottomY:number, right:number, topY:number){
        super(leftX, bottomY);
        this.right = right;  // input riftX its
        this.topY = topY;  // input topY its
    }

    getWidth():number{
        return this.right - this.leftX; // right - leftX = 1
    }
    getHeight():number{
        return this.topY - this.bottomY; // topY - bottomY = -2
    }
    getArea():number{
        return this.getWidth() * this.getHeight();  // getWidth * getHeight = -2
    }

    toJSON(): any {
        return {
            leftX: this.leftX,
            bottomY: this.bottomY,
            topY: this.topY
        };
    }
}

class Circle extends Shape{
    private radius:number;
    constructor(leftX:number, bottomY:number, radius:number){
        super(leftX, bottomY);
        this.radius = radius;
    }
    getWidth():number{
        return this.radius * 2;
    }
    getHeight():number{
        return this.radius * 2;
    }
    getArea():number{
        return Math.PI * this.radius * this.radius;
    }
}

let CircleRadius = new Circle(2, 2, 4);

console.log(CircleRadius);

let Rectang = new Rectangle(6,4,7,2); // resould Rectangle is = { leftX: 6, bottomY: 4, right: 7, topY: 2 }
Rectang.getWidth(); // resould = 1
Rectang.getHeight(); // resould = -2
Rectang.getArea();  // resould = -2

console.log('it is rectang : ',Rectang.getArea());

let shape = new Shape(1,32);// resould have shape { leftX: 1, bottomY: 32 }
shape.getArea(); // resould have = 0
shape.getHeight(); // resould have = 0
shape.getWidth(); // resould have = 0

console.log("it is Area : ", shape.getWidth());


let Shapes = new Square(12, 5, 2);  // resould it is 
Shapes.getArea(); // resould have Shapes = 4
Shapes.getWidth(); // resould have Shapes = 2
Shapes.getHeight(); // resould have Shapes = 2

console.log("it is Height: ",Shapes.getHeight())

class Point {
    constructor(private x: number, private y: number){}

    public translateX(deltaX: number): Point{
        return new Point(this.x + deltaX , this.y);
    }

    public clone(): Point{
        return new Point(this.x, this.y);
    }

}

let p1 = new Point(10, 20);
let p2 = p1.clone();
let p3 = p1.translateX(10);

console.log(p1, p2, p3)
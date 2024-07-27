export class Point {
    constructor(public x : number, public y : number){}

    public isEqual(point:Point):boolean{
        return this.x === point.x && this.y === point.y;
    }

    public translate(x:number, y:number):void{
        this.x += x;
        this.y += y;
    }
}
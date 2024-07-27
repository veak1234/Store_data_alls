export class Point {

    constructor(public x:number, public y:number){}

    public isEqual(point:Point):boolean{
        return this.x === point.x && this.y === point.y;
    }
}




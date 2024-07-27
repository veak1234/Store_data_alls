import { Point } from './point';

export class Line {
    constructor(public point1 : Point, public point2 : Point, public color : string){}

    public isEqual(line: Line):boolean{
        return this.point1.isEqual(line.point1) === line.point1.isEqual(line.point2) && this.color === line.color;
    }

    public translate(x:number, y:number):Line{
        this.point1.translate(x, y);
        this.point2.translate(x, y);
        return this;
    }
}
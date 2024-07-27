import { Point } from './point';

export class Line {

    constructor(public point1 : Point, public point2 : Point, public color : string){}

    public isEqual(line: Line):boolean{
        return (this.point1.isEqual(line.point1) === this.point2.isEqual(line.point2) && this.color === line.color);
    }
}
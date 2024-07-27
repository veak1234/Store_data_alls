import { Point } from './point';

export class Line {
    public point1 : Point;
    public point2 : Point;

    constructor(point1 : Point, point2 : Point){
        this.point1 = point1;
        this.point2 = point2;
    }

    public isEqual(line : Line):boolean{
        return (this.point1.x === line.point1.x && this.point1.y === line.point1.y) && (this.point2.x === line.point2.x && this.point2.y === line.point2.y);
    }
}
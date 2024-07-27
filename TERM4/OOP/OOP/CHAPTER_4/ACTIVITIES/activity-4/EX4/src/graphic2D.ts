import { Line } from './line';

export class Graphic2D {
    private lines : Line[] = [];

    // Add new line 
    public addLine(line : Line):void{
        this.lines.push(line);
    }

    // Check new line is exist or not 
    public contain(newLine : Line):boolean{
        let isContain : boolean = false;
        this.lines.forEach(line =>{
            if(line.point1.isEqual(newLine.point1) === line.point1.isEqual(newLine.point2) && line.color === newLine.color){
                isContain = true;
            }
        })
        return isContain ;
    }
}
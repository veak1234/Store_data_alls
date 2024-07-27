import { Shape } from './Shape';

export class Circle extends Shape {
    private radius : number;

    constructor(leftX:number, bottomY:number, radius:number){
        super(leftX, bottomY);
        this.radius = radius;
    }

    getWidth=():number => this.radius * 2;
    getHeight=():number => this.radius * 2;
    getArea=():number =>Math.PI * this.radius**2;
}

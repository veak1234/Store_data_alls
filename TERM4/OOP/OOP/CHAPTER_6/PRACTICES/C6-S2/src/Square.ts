import { Shape } from './Shape';

export class Square extends Shape{
    private size : number;

    constructor(bottomY:number, leftX:number, size:number){
        super(bottomY, leftX);
        this.size = size;
    }

    getWidth=():number => this.size;
    getHeight=():number => this.size;
    getArea=():number => this.size**2;
}
import { Point } from "./Point";

export class ColoredPoint extends Point {
  constructor(x: number, y: number) {
    super(x, y);
  }

  /**
   * Depending on the point position:
   * - if x= 0 => green
   * - else if y= 0 => red
   * - else => yellow
   * @returns the color of the point
   */
  getColor(): string {
    let color : string = "yellow";
    if(this.getX == 0){
      color = "green";
    }
    else if(this.getY == 0){
      color = "red";
    }
    return color;
  }
}

import { Vehicle } from "./vehicle";

export class Batmobile extends Vehicle {
  isInside: boolean;
  constructor(
    plateID: string,
    weight: number,
    private speed: number,
    isInside: boolean
  ) {
    super(plateID, speed);
    this.speed = speed;
    this.isInside = isInside;
    this.weight = weight;
  }
  public getSpeed(): number {
    return this.speed;
  }
}


import { Vehicle } from "./vehicle";

export class Canvoy {
  private canvoy: Vehicle[] = [];

  constructor(canvoy: Vehicle[]) {
    this.canvoy = canvoy;
  }

  public getMaxSpeed(): number {
    let max = this.canvoy[0].getSpeed();
    for (let vehicle of this.canvoy) {
      if (vehicle.getSpeed() > max) {
        max = vehicle.getSpeed();
      }
    }
    return max;
  }
}

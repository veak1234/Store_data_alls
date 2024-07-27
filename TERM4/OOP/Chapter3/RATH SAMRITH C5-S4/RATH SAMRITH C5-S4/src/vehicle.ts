export abstract class Vehicle {
  protected plateID: string;
  protected weight: number;

  constructor(plateID: string, weight: number) {
    this.plateID = plateID;
    this.weight = weight;
  }

  abstract getSpeed(): number;
}

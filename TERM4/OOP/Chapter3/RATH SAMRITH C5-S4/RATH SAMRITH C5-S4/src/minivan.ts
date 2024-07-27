import { Vehicle } from "./vehicle";

export class MiniVan extends Vehicle {

  private speed: number = 120;
  private passenger: number;
  private laggage: number;

  constructor(
    plateID: string,
    weight: number,
    passenger: number,
    laggage: number
  ) {
    super(plateID, weight);
    this.passenger = passenger;
    this.laggage = laggage;
  }

  public getSpeed(): number {
    for (let i = 0; i < this.passenger; i++) {
      this.speed -= 10;
    }
    for (let i = 0; i < this.laggage; i++) {
      this.speed -= 5;
    }
    return this.speed;
  }
}
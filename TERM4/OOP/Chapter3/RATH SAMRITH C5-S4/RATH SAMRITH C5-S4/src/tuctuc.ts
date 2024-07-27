import { Vehicle } from "./vehicle";

export class TucTuc extends Vehicle {
  private speed: number = 50;
  private passenger: number;
  constructor(plateID: string, weight: number, passenger: number) {
    super(plateID, weight);
    this.speed = this.speed;
    this.passenger = passenger;
  }
  public getSpeed(): number {
    for (let i = 0; i < this.passenger; i++) {
      this.speed -= 5;
    }
    return this.speed;
  }
}

// console.log(new TucTuc('speed',2,3))


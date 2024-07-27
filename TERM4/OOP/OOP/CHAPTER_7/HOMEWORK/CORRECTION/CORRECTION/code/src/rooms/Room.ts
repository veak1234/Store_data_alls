import { Bed } from "./Bed";

/**
 * A room is composed of many beds
 */
export class Room {
  private beds: Bed[] = [];

  constructor(private id: number) {}

  getNumberOfBeds() {
    return this.beds.length;
  }

  getBeds() {
    return this.beds;
  }

  addBed(bed: Bed) {
    return this.beds.push(bed);
  }

  /**
   * See return !
   * @returns the first free bed in this room, or undefined if no free bed
   */
  getFreeBed(): Bed | undefined {
    for (let bed of this.beds) {
      if (!bed.hasPatient) {
        return bed;
      }
    }
    return undefined; // no free bed !
  }
}

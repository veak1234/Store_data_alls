import { Room } from "./Room";
import { Door } from "./Door";
export class House {
  name: string;
  room: Room[] = [];
  door: Door[] = [];
  constructor(name: string) {
    this.name = name;
  }
}

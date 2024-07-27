import { Room } from "./Room";

export class Hotel {
  name: string;

  rooms: Room[];

  constructor(name: string) {
    this.name = name;
    this.rooms = [];
  }

  addRoom(room: Room) {
    this.rooms.push(room);
  }
}

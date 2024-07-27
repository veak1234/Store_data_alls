import { Room } from "./Room";
import { Manager } from "./Manager";

export class Hotel {
  name: string;

  rooms: Room[];
  manager?: Manager = undefined; // by default no manager

  constructor(name: string) {
    this.name = name;
    this.rooms = [];
  }

  addRoom(room: Room) {
    this.rooms.push(room);
  }

  setmanager(manager: Manager) {
    this.manager = manager;
  }
  hasManager(): boolean {
    return this.manager != undefined;
  }
}

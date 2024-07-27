import { Room } from "./Room";
import { Door } from "./Door";

export class House {
  name: string;
  doors: Door[]=[];
  rooms: Room[]=[];

  constructor(name: string) {
    this.name = name;
  }

  addRoom(room: Room):void{
    this.rooms.push(room);
  }

  addDoor(door:Door):void{
    this.doors.push(door);
  }
}

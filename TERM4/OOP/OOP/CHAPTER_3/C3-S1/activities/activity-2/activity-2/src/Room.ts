import { Door } from './Door';

export class Room {
  name: string;
  doors:Door[]=[];

  constructor(name: string) {
    this.name = name;
  }

  addDoorToRoom(door:Door):void{
    this.doors.push(door);
  }
}

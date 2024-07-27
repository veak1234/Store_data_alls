import { Room } from "./Room";

export class RoomsManager {
  public rooms: Room[] = [];

  getNumberOfRooms(): number {
    return this.rooms.length;
  }

  addRoom(room: Room) {
    return this.rooms.push(room);
  }

  /**
   * See return !
   * @return the first room available with a free bed
   */
  getFreeRoom(): Room | undefined {
    for (let room of this.rooms) {
      if (room.getFreeBed() != undefined) {
        return room;
      }
    }
    return undefined; // no room free !
  }
}

import { Room } from "./Room";
import { Patient } from "../human/patient/Patient";

export class RoomsManager {
  public rooms: Room[] = [];

  getNumberOfRooms(): number {
    return this.rooms.length;
  }

  addRoom(room: Room) {
    return this.rooms.push(room);
  }

  /** Find a room with a free bed
   * @return the first room available with a free bed
   */
  findFreeRoom(): Room | undefined {
    for(let room of this.rooms){
      if(room.hasFreeBed()){
        return room;
       }
    }
    return undefined; // TODO
  }

  // Remove Patient 
  removePatient(patient:Patient):Room | undefined {
    for(let room of this.rooms){
      if(room.removeThisPatient(patient)){
        return room;
      }
    }
    return undefined;
  }

}

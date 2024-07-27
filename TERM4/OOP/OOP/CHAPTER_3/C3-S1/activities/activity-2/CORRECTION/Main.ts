import { House } from "./House";
import { Door } from "./Door";
import { Room } from "./Room";

// TODO  :
//  1- Create:
//      - 1 house
let house = new House("My house")
//        - 3 doors
let door1 = new Door("green");
let door2 = new Door("yellow");
let door3 = new Door("red");
//         - 2 rooms
let room1 = new Room("B12");
let room2 = new Room("B13");
// 2- Add the 2 rooms to the house
house.room.push(room1);
house.room.push(room2);
// 3 – Add a door to the house and rooms
house.door.push(door1);
house.door.push(door2);
house.door.push(door3);

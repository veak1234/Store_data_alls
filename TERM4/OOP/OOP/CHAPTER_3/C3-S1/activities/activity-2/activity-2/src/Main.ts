import { House } from "./House";
import { Door } from "./Door";
import { Room } from "./Room";

// TODO  :
//  1- Create:
//      - 1 house
let salHouse = new House("Sal");
//        - 3 doors
let door1 = new Door("black");
let door2 = new Door("white");
let door3 = new Door("red");
//         - 2 rooms
let room1= new Room("Sal");
let room2= new Room("Crush");

// 2- Add the 2 rooms to the house
salHouse.addRoom(room1);
salHouse.addRoom(room2);

// 3 – Add a door to the house and rooms
room1.addDoorToRoom(door1);
room2.addDoorToRoom(door2);

salHouse.addDoor(door1);
salHouse.addDoor(door2);
salHouse.addDoor(door3);

// console.log(room1);
console.log(salHouse.rooms[0].doors);

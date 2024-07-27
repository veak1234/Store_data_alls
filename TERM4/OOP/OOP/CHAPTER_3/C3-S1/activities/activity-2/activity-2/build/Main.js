"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var House_1 = require("./House");
var Door_1 = require("./Door");
var Room_1 = require("./Room");
// TODO  :
//  1- Create:
//      - 1 house
var salHouse = new House_1.House("Sal");
//        - 3 doors
var door1 = new Door_1.Door("black");
var door2 = new Door_1.Door("white");
var door3 = new Door_1.Door("red");
//         - 2 rooms
var room1 = new Room_1.Room("Sal");
var room2 = new Room_1.Room("Crush");
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
//# sourceMappingURL=Main.js.map
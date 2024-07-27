import { DotDotDotToken } from "typescript";

class houses{
    numberDoor: number;
    owner: string;
    doors: doors[] = []; // Input the array
    rooms: rooms[] = [];

    constructor(numberDoor: number, owner: string){
        this.numberDoor = numberDoor;
        this.owner = owner;
    };

    // push data form class doors
    setDoors(door: doors){
        this.doors.push(door);
        
    };

    // push data form class rooms
    setRooms(room: rooms){
        this.rooms.push(room);
    }
};

class doors{
    door: number;
    constructor(door: number){
        this.door = door;
    };
};

class rooms{
    name : number;
    constructor(name : number){
        this.name = name;
    }
};

let Doo1 = new doors(2);
let Room1 = new rooms(1);
let home = new houses(1, "veak");

home.setDoors(Doo1); // set doors to class houses
home.setRooms(Room1); // set rooms to class houses

console.log(home);

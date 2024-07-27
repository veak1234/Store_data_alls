class House {
    address: string = "sophana house"
    bedroom: Room
   
    constructor() {
        this.bedroom = new Room(this);
    }
}
class Room {
    parentHouse : House;
    mainWindows: Windows;

    constructor(parentHouse : House) {
        this.parentHouse = parentHouse;
        this.mainWindows = new Windows("WHITE");
    }
}
class Windows {
    color: string
    constructor(color: string) {
        this.color = color;
    }
}
 
// create the House
let sophanaHouse = new House();
let theBedroom = sophanaHouse.bedroom;

console.log(theBedroom.parentHouse.address);

// For the window, we want to access to the house address
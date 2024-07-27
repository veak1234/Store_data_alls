class House {
    bedroom: Room
    livingRoom: Room
    constructor() {
        this.bedroom = new Room();
        this.livingRoom = new Room();
    }
}
class Room {
    windows: Windows[]

    constructor() {
        this.windows = [];
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

// Print the window color
console.log(sophanaHouse.livingRoom.windows[0].color);
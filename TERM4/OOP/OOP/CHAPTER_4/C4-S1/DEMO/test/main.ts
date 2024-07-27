class House {
    bedroom: Room

    constructor() {
        this.bedroom = new Room();
    }
}

class Room {
    mainWindow: Windows

    constructor() {
        this.mainWindow = new Windows("WHITE");
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
console.log(sophanaHouse.bedroom.mainWindow.color);
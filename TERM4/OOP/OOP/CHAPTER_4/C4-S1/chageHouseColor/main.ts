// House to window 
class House {
    name: string
    // window:Windows

    constructor(name: string) {
        this.name = name;
        // this.window = new Windows("red");
    }
}

// Window to house 
class Windows {
    color: string
    house:House

    constructor(color:string){
        this.color = color
        this.house = new House("sal")
    }
}


let salHouse = new House("Sal");
let w1 = new Windows("green");
console.log(w1.house.name)
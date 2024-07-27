
class House {
    numberDoor: number;
    owner: string;

    constructor(numberDoor: number, owner: string){
        this.numberDoor = numberDoor;
        this.owner = owner;
    };
};

class Trees{
    size: number;
    constructor(size: number){
        this.size = size;
    };
};

console.log(new House(1,"veak"));
console.log(new Trees(20));
class Table {
    nbOfTable:number

    constructor(nbOfTable:number){
        this.nbOfTable = nbOfTable
    }
}

class House {
    name:string;
    nbOfTable: Table

    constructor (name:string, nbOfTable:Table){
        this.name = name
        this.nbOfTable = nbOfTable
    }
}

let myTable = new Table(20);
let crushTable = new Table(10);

let myHouse = new House("Sal", myTable);
let crushHouse = new House("My Crush", crushTable);

console.log(myHouse.name+"'s", "house has" ,myHouse.nbOfTable.nbOfTable,(myHouse.nbOfTable.nbOfTable<=1)?"table.":"tables.");
console.log(crushHouse.name+"'s", "house has" ,crushHouse.nbOfTable.nbOfTable, (crushHouse.nbOfTable.nbOfTable==1)?"table.":"tables.");

// ====== Way 1 ========
class Name{
    private name: string = "sal";

    constructor(name: string){
        this.name = name;
    }

    getName():string{
        return this.name;
    }

    setName(name:string):void{
        this.name = name;
    }
}

// ====== Way 2 =======
// class Name{
//     private name: string = "sal";

//     constructor(name: string){
//         this.name = name;
//     }

//     get Name():string{
//         return this.name;
//     }

//     set Name(name:string){
//         this.name = name;
//     }
// }

let s1 = new Name("Visal");
let s2 = "visal";
console.log(s1.getName())
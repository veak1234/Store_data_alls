
class drinks  {
    constructor(private name:string, protected price: number){}
    getName(): string{
        return this.name;
    }
    getPrice(): number{
        return this.price;
    }

}

class Coffee extends drinks{
    constructor(name:string, price: number){
        super( name, price);
        this.price = price;
    }
}

class Orange extends drinks{
    constructor(name:string, price: number){
        super(name, price );
        this.price = price;
    }
}

let Coffee1 = new Coffee('coffees', 13);
let Orange1 = new Orange('orange', 14);

console.log(Orange1,Coffee1);
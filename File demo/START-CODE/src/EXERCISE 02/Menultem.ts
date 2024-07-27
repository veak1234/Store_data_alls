
export class Menultems{
    private name: string;
    private description: string;
    private price: number;

    constructor(name:string, description:string, price:number){
        this.name = name;
        this.description = description;
        this.price = price;
    }
    public getName(): string{
        return this.name;
    }
    public getDescription(): string{
        return this.description;
    }
    public getPrice(): number{
        return this.price;
    }
    public setName(name:string){
        this.name = name;
    }
    public setDescription(description:string){
        this.description = description;
    }
    public setPrice(price:number){
        this.price = price;
    }
    public toString(): string{
        return this.name + " " + this.description + " " + this.price;
    }
}

let price = new Menultems("Big Meal", "A delicious burger with fries and a drink", 9.99)

console.log(price.toString());
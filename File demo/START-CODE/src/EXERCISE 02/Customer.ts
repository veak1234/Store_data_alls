
import { Menultems } from "./Menultem";
import { Order } from "./Order";

export class Customer extends Menultems{
    private order: number;

    constructor(name:string, description:string, price:number, private ID:number, Order: number){
        super(name, description, price);
        this.ID = ID;
        this.order = Order;
    }
    public getOrder(): number{
        return this.order;
    }
    public setOrder(Order: number){
        this.order = Order;
    }
    
}

let Customers1 = new Customer("Joht","A delicious burger with fries and a drink.", 88, 101, 21);
let Customers2 = new Customer("Alice","Crunchy chips served with a dip.", 99, 102, 12);

console.log(Customers1.getOrder());
console.log(Customers2);
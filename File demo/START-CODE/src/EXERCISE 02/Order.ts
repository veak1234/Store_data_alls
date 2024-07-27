 
export abstract class Order{
    constructor(public order: Order, private Total: number, private customers: Order){}
    public getTotal(): number{
        return this.Total;
    }
    public setTotal(Total: number){
        this.Total = Total;
    }
    public getOrder(): Order{
        return this.order;
    }
    setOrder(order: Order){
        this.order = order;
    }
    public getCustomers(): Order{
        return this.customers;
    }
    public setCustomers(customers: Order){
        this.customers = customers;
    }
    public toString(): string{
        return this.order.toString() + " " + this.Total + " " + this.customers.toString();
    }
}

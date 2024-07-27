class Store{
    name: string;
    Customer: Customer[] = [];
    Product: Product[] = [];

    constructor(name: string){
        this.name = name;
    };

    setCustomer(Customer: Customer){
        this.Customer.push(Customer);
    };
    setProduct(Product: Product){
        this.Product.push(Product);
    };
};

class Customer{
    fistname: string;
    lastname: string;
    Feedback: Feedback [] = [];

    constructor(fistname: string, lastname: string){
        this.fistname = fistname;
        this.lastname = lastname;
    };

    public setFeedback(Feedback: Feedback){
        this.Feedback.push(Feedback);
    };

};

class Feedback{
    comment: string;
    evaluation: number;
    Product: Product[] = [];

    constructor(comment: string, evaluation: number){
        this.comment = comment;
        this.evaluation = evaluation;
    };
    public setProduct(Product: Product){
        this.Product.push(Product);
    };

};

class Product{
    name: string;
    price: number;

    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    };
};

let customer = new Customer("veak","veak");
let feedback = new Feedback("veak",1);
let store = new Store("veak");
let productFeedback = new Product('veak',1);

feedback.setProduct(productFeedback);
customer.setFeedback(feedback);
store.setProduct(productFeedback);
store.setCustomer(customer);

console.log(store);
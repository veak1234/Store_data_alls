
class Store {
    private _name: string;
    public products: Product[] = [];
    public feedbacks: Feedback[] = [];

    constructor(name: string) {
        this._name = name;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    getProductLessThan(price: number, product: Product): Product[] {
        this.products.push(product);
        return this.products.filter(product => product.price > price);
    }

    getFeedbackContaining(keyword: string): Feedback[] {
        return this.feedbacks.filter(feedback => feedback.comment.includes(keyword));
    }

    getCustomerComments(customer: Customer): string[] {
        const customerFeedbacks = this.feedbacks.filter(feedback => feedback.customer === customer);
        return customerFeedbacks.map(feedback => feedback.comment);
    }
}

class Customer {
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(firstName: string) {
        this._firstName = firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(lastName: string) {
        this._lastName = lastName;
    }
}

class Feedback {
    private _comment: string;
    private _evaluation: number;
    private _customer: Customer;

    constructor(comment: string, evaluation: number, customer: Customer) {
        this._comment = comment;
        this._evaluation = evaluation;
        this._customer = customer;
    }

    public get comment(): string {
        return this._comment;
    }

    public set comment(comment: string) {
        this._comment = comment;
    }

    public get evaluation(): number {
        return this._evaluation;
    }

    public set evaluation(evaluation: number) {
        this._evaluation = evaluation;
    }

    public get customer(): Customer {
        return this._customer;
    }

    public set customer(customer: Customer) {
        this._customer = customer;
    }
}

class Product {
    private _name: string;
    private _price: number;

    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get price(): number {
        return this._price;
    }

    public set price(price: number) {
        this._price = price;
    }
}

let customer = new Customer("Veak", "Veak");
let feedback = new Feedback("Sleeps", 1, customer);
let store = new Store("Veak");
let productFeedback = new Product('oder', 1);

store.feedbacks.push(feedback);
console.log(store.getCustomerComments(customer));

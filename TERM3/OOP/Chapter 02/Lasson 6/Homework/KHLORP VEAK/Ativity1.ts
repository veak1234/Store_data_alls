
class Store{
    name : string;
    Product: Product[] = [];

    constructor(name: string){
        this.name = name;
    };
    setProduct(Product: Product){
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


let Products = new Product('Veak',15);

let store = new Store('veak');

store.setProduct(Products);

console.log(store);
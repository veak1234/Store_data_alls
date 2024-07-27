
class Product{
    name: string;
    price: number;
    Feedback: Feedback[] = [];

    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    };

    setFeedback(Feedback: Feedback){
        this.Feedback.push(Feedback);
    };

};

class Feedback {
    comment: string;
    evaluation: number;

    constructor(comment: string, evaluation: number){
        this.comment = comment;
        this.evaluation = evaluation;
    };
};

let product = new Product('oder', 1);
let feedback = new Feedback('not work', 1);

product.setFeedback(feedback);

console.log(product)
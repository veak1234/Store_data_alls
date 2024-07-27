abstract class Operation {
  constructor(
    public number1: number,
    public number2: number) { }

  abstract doOperation(): number;
}


// TODO 1 : Create a class AddOperation, which extends Operation
//          doOpenration must return the sum of the 2 numbers
class AddOperation extends Operation{

  doOperation=(): number => this.number1 + this.number2;
}

// TODO 2 : Create a class MultiplyOperation, which extends Operation
//          doOpenration must return the multiplication of the 2 numbers

class MultiplyOperation extends Operation {

  doOperation = () :number => this.number1 * this.number2;
}

let o1 : AddOperation = new AddOperation(2,2);
let o2 : MultiplyOperation = new MultiplyOperation(2,5);

console.log(o1.doOperation());
console.log(o2.doOperation());



abstract class Operation {
    constructor(protected number1:number, protected number2:number) {}

    abstract sum():void;
}

class Addition extends Operation{
    sum=():number => this.number1 + this.number2;
}

let sum1 : Addition = new Addition(2,3);
console.log(sum1.sum());

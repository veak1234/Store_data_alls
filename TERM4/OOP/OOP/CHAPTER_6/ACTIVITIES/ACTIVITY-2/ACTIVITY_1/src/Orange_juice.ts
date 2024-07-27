import { Drink } from './Drink';

export class OrangeJuice extends Drink {
    private numberOfOrange : number;

    constructor(name: string, price : number, numberOfOrange : number){
        super(name, price);
        this.numberOfOrange = numberOfOrange;
    }
}
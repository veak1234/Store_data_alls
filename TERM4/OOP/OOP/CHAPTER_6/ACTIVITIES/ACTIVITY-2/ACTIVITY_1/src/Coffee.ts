import { Drink } from './Drink';

export class Coffee extends Drink {
    private quantityOfSugar : number;

    constructor(name: string, price : number, quantityOfSugar: number){
        super(name, price);
        this.quantityOfSugar = quantityOfSugar;
    }
}
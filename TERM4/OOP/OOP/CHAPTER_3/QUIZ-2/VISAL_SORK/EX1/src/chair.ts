import { House } from './house';

export class Chair {
    private chairId : number;
    private house : House;

    constructor(house:House,chairId: number, ){
        this.chairId = chairId;
        this.house = house;
    }
}
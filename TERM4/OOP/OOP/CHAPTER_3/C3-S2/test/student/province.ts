import { District } from './district';

export class Province{
    name:string;
    district:District[];

    constructor(name:string, district:District[]){
        this.name = name;
        this.district = district;
    }
}

class Country {
    name:string;
    population:number;
    capital:string;
    currency:string;
    constructor(name:string, population:number, capital:string, currency:string){
        this.name = name;
        this.population = population;
        this.capital = capital;
        this.currency = currency;
    }

    getInformation():string{
        return `Welcome to ${this.name}, ${this.population} millions people, capital ${this.capital} and currency ${this.currency}`;
    }
}

let france= new Country("France", 70, "Paris", "Euro");
let cambodia= new Country("Cambodia", 17, "Phnom Penh", "Riel");
let uk= new Country("UK", 80, "London", "Pound");
console.log(france.getInformation());
console.log(cambodia.getInformation());
console.log(uk.getInformation());
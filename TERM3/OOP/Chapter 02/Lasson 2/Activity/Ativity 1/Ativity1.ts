
class country{
    name: string;
    population: number;
    capital: string;
    currency: string

    constructor(name: string, population: number, capital: string, currency: string){
        this.name = name;
        this.population = population;
        this.capital = capital;
        this.currency = currency;
    };
    getInformtion():string{
        return "Welcome to " + this.name + " With population, " 
        + this.population.toString() +" millions people "+ this.capital 
        + " and courrency " + this.currency; 
    };
};

let run1 = new country("France",70,"Paris", "Euro");
let run2 = new country("Cambodia",17,"Phnom Penh", "Riel");
let run3 = new country("UK",80,"London", "Pound");
console.log(run1.getInformtion());
console.log(run2.getInformtion());
console.log(run3.getInformtion());


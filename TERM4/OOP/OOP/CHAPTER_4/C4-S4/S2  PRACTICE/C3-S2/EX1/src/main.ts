
export class Person{
    private name: string;
    private yearOfBirth: number;

    constructor(name: string, yearOfBirth: number){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    public getName():string{
        return this.name
    }
    public getYearOfBirth():number{
        return this.yearOfBirth;
    }
}

export class Calendar{
    private currentYear : number;

    constructor(currentYear : number){
        this.currentYear = currentYear
    }

    public getAge(person:Person):number{
        return this.currentYear - person.getYearOfBirth();
    }
}

let newCal = new Calendar(2023);
let person1 = new Person("sal", 2002);

console.log(newCal.getAge(person1));
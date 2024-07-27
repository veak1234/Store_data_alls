
class Person {
    private name: string;
    private yearOfBirth: number;

    public constructor(name: string, yearOfBirth: number) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    public getName(): string {
        return this.name;
    }

    public getYearOfBirth(): number { 
        return this.yearOfBirth;
    }
}

class Calendar {
    private currentYear: number;

    public constructor(currentYear: number) {
        this.currentYear = currentYear;
    }

    public getAge(person: Person): number {
        return this.currentYear - person.getYearOfBirth();
    }
}


const person = new Person("Rath", 2000);
const calendar = new Calendar(2024);


// Call the getAge method and log the result
console.log(person.getName(), calendar.getAge(person), "years"); 

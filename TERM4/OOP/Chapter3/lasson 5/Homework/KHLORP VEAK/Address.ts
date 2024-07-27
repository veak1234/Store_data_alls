
export class Address{
    private Address: string;

    constructor(name: string){
        this.Address = name;
    }

    public get(): string{
        return this.Address;
    }

    public set(name: string){
        return this.Address = name;
    };
}

// let names = new Address("PNC");

// console.log(names);
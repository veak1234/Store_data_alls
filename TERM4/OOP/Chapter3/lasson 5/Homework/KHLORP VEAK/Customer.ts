
export class Customer  {
    private firstname: string;
    private lastname: string;

    constructor(firstname: string, lastname: string){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    public getfirstname(): string{
        return this.firstname;
    }

    // public setfirstname(firstname: string){
    //     this.firstname = firstname;
    // }

    public getlastname(): string{
        return this.lastname;
    }
    public setlastname(lastname: string,firstname: string){
        this.lastname = lastname;
        this.firstname = firstname;
    }
}

// let CustomerName = new Customer("veak","Khlorp");
// console.log(CustomerName);

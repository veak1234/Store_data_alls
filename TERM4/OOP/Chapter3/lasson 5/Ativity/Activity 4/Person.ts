
class preson {
    constructor(private name: string, protected address: string) {}
}

class student extends preson { 
    test: string;
    constructor(name: string, address: string, test: string) {
        super(name, address);
        this.test = test;
        this.address = address;
    }
}

console.log(new preson('Veal', 'PN'))
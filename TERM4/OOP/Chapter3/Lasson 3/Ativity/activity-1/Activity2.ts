
class School{
    Teacter: Teacter;
    constructor(){
        this.Teacter = new Teacter();
    }
}

class Teacter{
    Names: Names;

    constructor(){
        this.Names = new Names("Him","Rady")
    }
}

class Names{
    fistname: string;
    lastname: string;

    constructor(fistname: string, lastname: string){
        this.fistname = fistname;
        this.lastname = lastname;
    }
}

console.log(new School());
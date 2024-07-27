abstract class Animals{
    constructor(private name: string){

    }

    abstract playSound(): void;
}

class Cat extends Animals{
    playSound(): void {
        console.log("Woaw Woaw!");
    }
}

console.log(new Cat('cat').playSound());



abstract class Admimal{
    private name : string;
    constructor(name : string){
        this.name = name;
    }
    getName(){
        return this.name;
        
    }
    abstract playSound(Sound: string): void;
}

class Dog extends Admimal{
    constructor(name : string){
        super(name);
    }
    playSound(Sound: string): void {
        console.log(Sound)
    }
}

class Cat extends Admimal{
    constructor(name : string){
        super(name);
    }
    playSound(Sound: string): void {
        console.log(Sound)
    }
}

let dog1 = new Dog("Dog");
let Cat1 = new Cat('Cat')

dog1.playSound("Woah!");
Cat1.playSound("Moe");

console.log(dog1,Cat1)
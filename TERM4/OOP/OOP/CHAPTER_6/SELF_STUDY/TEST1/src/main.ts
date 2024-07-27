class Animal {
    name : string;
    sound : string;

    constructor(name : string, sound : string){
        this.name = name;
        this.sound = sound;
    }

    makeSound():string{
        return this.sound;
    }
}

class Cat extends Animal{
    color : string;
    constructor(color : string){
        super();
        this.color = color;
    }
}
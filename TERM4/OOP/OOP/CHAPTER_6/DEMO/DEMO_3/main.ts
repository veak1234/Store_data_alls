abstract class Animal {
    constructor(protected name:string) {}

    abstract playSound():void;
}

class Cat extends Animal{
    constructor(name:string){
        super(name);
    }

    playSound() {
        console.log("Meoww");
        
    }
}

class Dog extends Animal{
    constructor(protected name:string){
        super(name);
    }

    playSound() {
        console.log("Wofff");
        
    }
}

let animals : Animal[] = [];
animals.push(new Cat("kiki"))
animals.push(new Dog("kiki"))
animals.forEach(animal=>{
    animal.playSound();
})
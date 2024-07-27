
class Animal {
    constructor(public name: string) {}

    public makeSound(): void {
        console.log("Some generic sound");
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    public makeSound(): void {
        console.log("Woof Woof!");
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    public makeSound(): void {
        console.log("Meow Meow!");
    }
}

// Function that accepts objects of type Animal
function makeAnimalSound(animal: Animal): void {
    animal.makeSound();
}

// Creating instances of different subclasses
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

// Using polymorphism to call the makeSound method
makeAnimalSound(dog); // Output: Woof Woof!
makeAnimalSound(cat); // Output: Meow Meow!

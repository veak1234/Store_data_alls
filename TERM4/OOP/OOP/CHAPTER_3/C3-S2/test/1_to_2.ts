class Arm{
    isArm:boolean;

    constructor(isArm:boolean){
        this.isArm = isArm;
    }
}

class Man{
    age:number;
    name:string;
    isLeftArm:Arm;
    isRightArm:Arm;

    constructor(age:number, name:string, isLeftArm:Arm, isRightArm:Arm){
        this.age = age;
        this.name = name;
        this.isLeftArm = isLeftArm;
        this.isRightArm = isRightArm;
    }
}

let salRightArm = new Arm(true);
let salLeftArm = new Arm(true);
let sal= new Man(20, "sal", salLeftArm, salRightArm);
console.log(sal);
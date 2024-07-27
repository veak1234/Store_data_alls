
class Man{
    leftArm: Arm = new Arm(true);
    rightArm: Arm = new Arm(false);
};
class Arm {
    isLeft: boolean;
    constructor(isLeft: boolean){
        this.isLeft = isLeft;
    };
};

let Mans = new Man();
console.log(Mans);

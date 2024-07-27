class Numbers{
    constructor(public a:number, public b:number){
        this.a = a;
        this.b = b;
    }

    getSquare(){
        return new Numbers((this.a)**2, (this.b)**2);
    }
}

let obj = new Numbers(2,3);
console.log(obj.getSquare());
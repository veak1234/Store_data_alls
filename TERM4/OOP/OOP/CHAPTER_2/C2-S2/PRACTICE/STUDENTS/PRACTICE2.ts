class WebAlumini {
  expInVueJs: number;
  expInNodeJs: number;
  canCodeOOP: boolean;

  constructor(expInVueJs: number, expInNodeJs: number, canCodeOOP: boolean) {
    this.expInVueJs = expInVueJs;
    this.expInNodeJs = expInNodeJs;
    this.canCodeOOP = canCodeOOP;
  }

  getSalay(): number {
    let salary = 0;
    if (this.expInVueJs < 1 && this.expInNodeJs < 1 && !(this.canCodeOOP)) {
      salary = 250;
    }
    else if(this.expInVueJs >= 1 && this.expInNodeJs < 1 && !(this.canCodeOOP)) {
        salary= 350;
    }
    else if(this.expInVueJs >= 1 && this.expInNodeJs >= 1 && !(this.canCodeOOP)) {
        salary= 450;
    }
    else{
        salary=700
    }
    return salary;
  }
}

let sal = new WebAlumini(0.5, 0.5, false);
let ka = new WebAlumini(1, 0.5, false);
let nit = new WebAlumini(2, 2, false);
let kyoy = new WebAlumini(2, 2, true);

console.log(sal.getSalay());
console.log(ka.getSalay());
console.log(nit.getSalay());
console.log(kyoy.getSalay());

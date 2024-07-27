class ABAaccount {
  balance: number;
  name: string;

  constructor(balance:number,name: string) {      // Constructor : return value as object.
    this.balance=balance; // this : refer to ABAaccount
    this.name = name;
  }

  credit(valueDollars: number): number {
    this.balance += valueDollars;
    return this.balance;
  }

  debit(valueDollars: number): void {
    this.balance -= valueDollars;
  }

  isEqual(otherAccount: ABAaccount): boolean {
    return this.balance == otherAccount.balance;
  }
}

// ----------------------------------
//	TEST ZONE
// ----------------------------------

let myAccount = new ABAaccount(100, "me");
let yourAccount = new ABAaccount(200 ,"you");

console.log(myAccount.credit(500));
console.log(yourAccount);
console.log(myAccount.isEqual(yourAccount));
console.log(new ABAaccount(200,"you"))



type bankAccount = {
  balance: number,
  name: string
}

let aco:bankAccount = {balance: 999999, name:"Veak"};
function debit(account: bankAccount, valueDollar:number){
  // TODO
  console.log(account.name,"remaining money him = ",account.balance-=valueDollar, 
  "and "," He withdrew the money = ",valueDollar);
}
debit(aco,2000);

function credit(account: bankAccount, valueDollar:number){
  //TODO
  console.log(account.name,"remaining money him = ",account.balance+=valueDollar,
  "and "," He deposited money = ",valueDollar);
}
credit(aco,2001);
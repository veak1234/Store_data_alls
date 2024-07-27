type BankAccount = {
  balance: number;
  name: string;
};

function credit(account: BankAccount, valueDollars: number): void {
  // TODO : add the valueDollars to the account
  account.balance+= valueDollars;
}

function debit(account: BankAccount, valueDollars: number): void {
  // TODO : remove the valueDollars to the account
  account.balance -= valueDollars;
}

// ----------------------------------
//	TEST ZONE
// ----------------------------------

let thonAccount: BankAccount;
thonAccount = { balance: 400, name: "thon py" };

console.log(thonAccount.name + ", your account balance is " + thonAccount.balance);
credit(thonAccount, 300);
console.log(thonAccount.name + ", your account balance is " + thonAccount.balance);

debit(thonAccount, 0);
console.log(thonAccount.name + ", now your account balance is " + thonAccount.balance);

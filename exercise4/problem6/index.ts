
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
      this.balance = initialBalance;
  }

  public withdraw(amount: number): number {
      if (amount > this.balance) {
          return -1;
      }
      this.balance -= amount;
      return this.balance;
  }

  public deposit(amount: number): number {
      if ((this.balance + amount) > 1_000_000) {
          return -1;
      }
      this.balance += amount;
      return this.balance;
  }
}

// FedexAccount class
class FedexAccount {
  public sendMail(recipient: string): void {
      console.log(`Sending mail to ${recipient} via FedEx`);
  }

  public receiveMail(sender: string): void {
      console.log(`Receiving mail from ${sender} via FedEx`);
  }
}

// KazPostAccount combining BankAccount and FedexAccount functionalities
class KazPostAccount extends BankAccount {
  private fedex: FedexAccount;

  constructor(initialBalance: number) {
      super(initialBalance);
      this.fedex = new FedexAccount();
  }

  public sendMail(recipient: string): void {
      this.fedex.sendMail(recipient);
  }

  public receiveMail(sender: string): void {
      this.fedex.receiveMail(sender);
  }
}

// Function to withdraw money - Accepts BankAccount and KazPostAccount instances
export function withdrawMoney(account: BankAccount | KazPostAccount, amount: number): number {
  return account.withdraw(amount);
}

// Function to send a letter - Accepts FedexAccount and KazPostAccount instances
export function sendLetterTo(account: FedexAccount | KazPostAccount, recipient: string): string {
  for(const account of accounts){
  account.sendMail(recipient);
  }
} 

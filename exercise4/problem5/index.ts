class BankAccount {
    #balance = 0;

    constructor(initialBalance: number) {
        this.#balance = initialBalance;
    }

    public withdraw(amount: number): number {
        if (amount > this.#balance) {
            return -1;
        }
        this.balance -= amount;
        return this.#balance;
    }

    public deposit(amount: number): number {
        if ((this.#balance + amount) > 1_000_000) {
            return -1;
        }
        this.#balance += amount;
        return this.#balance;
    }
}

export default BankAccount;

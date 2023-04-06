abstract class Customer {
    c_name: string
    Age: number
    Address: string
    ContactNumber: number

    constructor(name: string, age: number, add: string, cno: number) {
        this.c_name = name;
        this.Age = age;
        this.Address = add;
        this.ContactNumber = cno;
    }
    public abstract Display(): number;

}

class Loanclass extends Customer {
    LoanAccountNo: number;
    LoanType: string;
    LoanAmount: number;
    Duration: number;
    InterestRate: number;

    constructor(name: string, age: number, add: string, cno: number, LoanAccountNo: number, LoanType: string, LoanAmount: number, Duration: number, InterestRate: number) {
        super(name, age, add, cno);
        this.c_name = name;
        this.Age = age;
        this.Address = add;
        this.ContactNumber = cno;
        this.LoanAccountNo = LoanAccountNo;
        this.LoanType = LoanType;
        this.LoanAmount = LoanAmount;
        this.Duration = Duration;
        this.InterestRate = InterestRate;
    }
    public Display(): any {
        console.log('CUSTOMER NAME IS : ' + this.c_name + ' ' + ' AGE: ' + this.Age + ' ' + 'ADDRESS IS : ' + this.Address);
        console.log('LOAN NO: ' + this.LoanAccountNo+' '+'LOAN TYPE:  '+this.LoanType+'  '+'LOAN AMOUNT IS IS : '+this.LoanAmount+' '+'DURATION IS : '+this.Duration+' '+'INTEREST RATE IS :  '+this.InterestRate);
    }
}

let acc = new Loanclass('vikram', 21, 'gd', 984347779,1254,'fixed',50000,6,6)
acc.Display();






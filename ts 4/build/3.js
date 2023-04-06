"use strict";
class Customer {
    constructor(name, age, add, cno) {
        this.c_name = name;
        this.Age = age;
        this.Address = add;
        this.ContactNumber = cno;
    }
}
class Loanclass extends Customer {
    constructor(name, age, add, cno, LoanAccountNo, LoanType, LoanAmount, Duration, InterestRate) {
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
    Display() {
        console.log('CUSTOMER NAME IS : ' + this.c_name + ' ' + ' AGE: ' + this.Age + ' ' + 'ADDRESS IS : ' + this.Address);
        console.log('LOAN NO: ' + this.LoanAccountNo + ' ' + 'LOAN TYPE:  ' + this.LoanType + '  ' + 'LOAN AMOUNT IS IS : ' + this.LoanAmount + ' ' + 'DURATION IS : ' + this.Duration + ' ' + 'INTEREST RATE IS :  ' + this.InterestRate);
    }
}
let acc = new Loanclass('vikram', 21, 'gd', 984347779, 1254, 'fixed', 50000, 6, 6);
acc.Display();

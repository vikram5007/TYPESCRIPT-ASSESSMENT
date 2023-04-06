"use strict";
class Displayer2 {
    constructor(acc, name, bal, int) {
        this.acc_no = acc;
        this.name = name;
        this.bal_amount = bal;
        this.interest = int;
    }
    balance() {
        console.log("helo ");
        if (this.interest == 0)
            console.log('BALANCE OF THE A/C ' + this.acc_no + ' IS ' + this.bal_amount);
        else {
            console.log('BALANCE OF THE A/C  ' + this.acc_no + ' IS ' + this.bal_amount * this.interest);
        }
    }
}
var a = new Displayer2(20105117, 'VIKRAM', 20000, 0);
a.balance();

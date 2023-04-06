"use strict";
class Electricity_bill {
    constructor(r, units) {
        this.rate = r;
        this.units = units;
    }
}
class Domestic extends Electricity_bill {
    constructor(r, units) {
        super(r, units);
    }
    bill_details() {
        console.log("THE TOTAL BILL FOR DOMESTIC USE IS " + (this.rate) * (this.units));
    }
}
class Commercial extends Electricity_bill {
    constructor(r, units) {
        super(r, units);
    }
    bill_details() {
        console.log("THE TOTAL BILL FOR COMMERCIAL USE IS " + (this.rate) * (this.units));
    }
}
var dom = new Domestic(5, 250);
dom.bill_details();
var com = new Commercial(10, 250);
com.bill_details();
